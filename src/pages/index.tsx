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
    <>
      <h3 style={{ marginBottom: "1.5rem" }}>Articles</h3>
    </>
  );
};

export default Home;
