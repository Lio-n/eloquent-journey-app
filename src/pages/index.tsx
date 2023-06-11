import ListOfArticles from "@/components/Home/listOfArticles";
import { AppStore } from "@/lib/redux/store";
import { ArticleThumbnailInfo } from "@/models/article.model";
import { getArticlesThumbnailApi } from "@/services/public/article.service";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const articlesState = useSelector((store: AppStore) => store.articles);
  const [articles, setArticles] = useState<QueryResponse<ArticleThumbnailInfo>>({ hits: [], pagination: { total: 0, limit: 0, offset: 0 } });

  useEffect(() => {
    const query: QueryOptions = { limit: 10, offset: 0, order: "desc" };

    const res = getArticlesThumbnailApi(query);
    setArticles(res);
  }, [articlesState]);

  return (
    <div style={{ marginBottom: "5rem" }}>
      <h1 style={{ margin: "var(--typography-spacing-vertical)", color: "var(--primary)" }}>Eloquent Journey</h1>

      <ListOfArticles articles={articles.hits} />
    </div>
  );
};

export default Home;
