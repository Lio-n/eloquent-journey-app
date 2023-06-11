import MockArticlesHits from "@/Mock/articles.mock";
import { ArticlesKey } from "@/lib/redux/states/articles";
import ArticleInfo from "@/models/article.model";
import { persistLocalStorage } from "@/utilities/localStorage.utility";

const initMockArticleData = (): ArticleInfo[] => {
  persistLocalStorage<ArticleInfo[]>(ArticlesKey, MockArticlesHits);

  return MockArticlesHits;
};

export default initMockArticleData;
