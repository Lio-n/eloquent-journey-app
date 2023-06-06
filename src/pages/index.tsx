import ListOfArticles from "@/components/Home/listOfArticles";
import { resetArticles } from "@/lib/redux/states/articles";
import { AppStore } from "@/lib/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const articlesState = useSelector((store: AppStore) => store.articles);

  useEffect(() => {
    if (articlesState.length === 0) dispatch(resetArticles());
  }, []);

  return (
    <div style={{ marginBottom: "5rem" }}>
      <h1 style={{ margin: "var(--typography-spacing-vertical)", color: "var(--primary)" }}>Eloquent Journey</h1>

      <ListOfArticles articles={structuredClone(articlesState).reverse()} />
    </div>
  );
};

export default Home;
