import PlusIcon from "@/ui/icons/plusIcon";
import { lazy } from "react";
import { Link } from "react-router-dom";

const LazyListOfArticles = lazy(() => import("@/components/Dashboard/Article/listOfArticles"));

const ArticleList = () => {
  return (
    <>
      <Link to="/dashboard/articles/create" style={{ margin: "var(--typography-spacing-vertical) 0", justifySelf: "baseline" }}>
        <button style={{ padding: ".5rem", width: "fit-content", borderRadius: "50%", margin: "0" }}>
          <PlusIcon />
        </button>
      </Link>

      <LazyListOfArticles />
    </>
  );
};

export default ArticleList;
