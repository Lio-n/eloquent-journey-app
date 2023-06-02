import ArticleInfo from "@/models/article.model";
import cleanArticleData from "@/utilities/cleanArticleData";
import getRandomNum from "@/utilities/genRandomNum";
import toShortFormat from "@/utilities/toShortFormat";
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

export default createArticleApi;
