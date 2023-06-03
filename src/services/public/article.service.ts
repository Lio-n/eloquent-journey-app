import { ArticlesKey } from "@/lib/redux/states/articles";
import ArticleInfo from "@/models/article.model";
import { getLocalStorage } from "@/utilities/localStorage.utility";

const getArticleByIdApi = (id: number): ArticleInfo => {
  const data = getLocalStorage(ArticlesKey) ? JSON.parse(getLocalStorage(ArticlesKey) as string) : [];

  const article = data.find((article: ArticleInfo) => article.id === id);

  return article;
};

export { getArticleByIdApi };
