import ListOfArticles from "@/components/Dashboard/Article/listOfArticles";
import PlusIcon from "@/ui/icons/plusIcon";
import { Link } from "react-router-dom";

const ArticleList = () => {
  return (
    <>
      <div style={{ width: "100%", margin: "var(--typography-spacing-vertical) 0" }}>
        <Link to="/dashboard/articles/create">
          <button style={{ margin: "0", padding: ".5rem", width: "fit-content", borderRadius: "50%" }}>
            <PlusIcon />
          </button>
        </Link>
      </div>

      <ListOfArticles />
    </>
  );
};

export default ArticleList;
