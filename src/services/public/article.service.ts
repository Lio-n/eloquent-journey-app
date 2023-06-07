import MockArticlesHits from "@/Mock/articles.mock";
import { ArticlesKey } from "@/lib/redux/states/articles";
import ArticleInfo, { ArticleListInfo, ArticleThumbnailInfo } from "@/models/article.model";
import { getLocalStorage } from "@/utilities/localStorage.utility";

const getArticleByIdApi = ({ id, hasToken }: { id: number; hasToken: boolean }): ArticleInfo => {
  const data = getLocalStorage(ArticlesKey) ? JSON.parse(getLocalStorage(ArticlesKey) as string) : MockArticlesHits;

  let article = [];
  if (hasToken) {
    article = data.find((article: ArticleInfo) => article.id === id);
  } else {
    article = data.find((article: ArticleInfo) => article.id === id && !article.isPrivate);
  }

  return article;
};

const getArticlesThumbnailApi = (query: QueryOptions): QueryResponse<ArticleThumbnailInfo> => {
  const { offset = 0, limit = 10, order = "desc" } = query;

  let data = getLocalStorage(ArticlesKey) ? JSON.parse(getLocalStorage(ArticlesKey) as string) : MockArticlesHits;

  data = structuredClone(data);

  let publicArticles = data.filter((article: ArticleInfo) => !article.isPrivate);

  const length = publicArticles.length;

  let response: QueryResponse<ArticleThumbnailInfo> = {
    hits: [],
    pagination: {
      offset,
      limit,
      total: length,
    },
  };

  if (!length) return response;
  if (offset > length - 1) return response;

  const start = Math.min(length - 1, offset);
  const end = Math.min(length, offset + limit);

  publicArticles = publicArticles.slice(start, end);

  const hits: ArticleThumbnailInfo[] = publicArticles.map((article: ArticleInfo) => ({
    id: article.id,
    title: article.title,
    description: article.description,
    thumbnail: article.thumbnail,
  }));

  // desc : mayor a menor.
  if (order === "desc") hits.reverse();

  response.hits = hits;

  return response;
};

export { getArticleByIdApi, getArticlesThumbnailApi };
