import { ArticlesKey } from "@/lib/redux/states/articles";
import ArticleInfo, { ArticleListInfo } from "@/models/article.model";
import cleanArticleData from "@/utilities/cleanArticleData.utility";
import getRandomNum from "@/utilities/genRandomNum.utility";
import { getLocalStorage } from "@/utilities/localStorage.utility";
import toShortFormat from "@/utilities/toShortFormat.utility";
import type { OutputData } from "@editorjs/editorjs";

const createArticleApi = async ({ article, isPrivate }: { article: OutputData; isPrivate: boolean }): Promise<ArticleInfo> => {
  const dataCleared = cleanArticleData(article.blocks);

  const id = getRandomNum();

  const today = new Date(); // Get the current date
  const timestamp = article.time || today.getTime(); // Get the timestamp in milliseconds

  const res: ArticleInfo = {
    blocks: article.blocks,
    time: timestamp,
    title: dataCleared.title,
    description: dataCleared.description,
    isPrivate,
    thumbnail: dataCleared.thumbnail,
    createdAt: toShortFormat(timestamp), // timestamp.seconds
    id,
  };

  return res;
};

const updateArticleApi = async ({ article, isPrivate, id }: { article: OutputData; isPrivate: boolean; id: number }): Promise<ArticleInfo> => {
  const dataCleared = cleanArticleData(article.blocks);

  const today = new Date(); // Get the current date
  const timestamp = article.time || today.getTime(); // Get the timestamp in milliseconds

  const res: ArticleInfo = {
    blocks: article.blocks,
    time: timestamp,
    title: dataCleared.title,
    description: dataCleared.description,
    isPrivate,
    thumbnail: dataCleared.thumbnail,
    createdAt: toShortFormat(timestamp), // timestamp.seconds
    id,
  };

  return res;
};

const getListOfArticlesApi = (query: QueryOptions): QueryResponse<ArticleListInfo> => {
  const { offset = 0, limit = 7, order = "desc" } = query;

  const data = getLocalStorage(ArticlesKey) ? JSON.parse(getLocalStorage(ArticlesKey) as string) : [];

  const length = data.length;

  let response: QueryResponse<ArticleListInfo> = {
    hits: [],
    pagination: {
      offset,
      limit,
      total: length,
    },
  };

  if (!length) return response;
  if (offset > length - 1) return response;

  // desc : mayor a menor.
  if (order === "desc") data.reverse();

  const start = Math.min(length - 1, offset);
  const end = Math.min(length, offset + limit);

  response.hits = data.slice(start, end);

  return response;
};

export { createArticleApi, getListOfArticlesApi, updateArticleApi };
