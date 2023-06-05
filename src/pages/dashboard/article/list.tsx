import ListOfArticles from "@/components/Dashboard/Article/listOfArticles";
import PlusIcon from "@/ui/icons/plusIcon";
import { Link } from "react-router-dom";

const ArticleList = () => {
  return (
    <>
      <Link to="/dashboard/articles/create" style={{ margin: "var(--typography-spacing-vertical) 0", justifySelf: "baseline" }}>
        <button style={{ padding: ".5rem", width: "fit-content", borderRadius: "50%", margin: "0" }}>
          <PlusIcon />
        </button>
      </Link>

      <ListOfArticles />
    </>
  );
};

export default ArticleList;
