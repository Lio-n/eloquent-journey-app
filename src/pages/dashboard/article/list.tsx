import { Link } from "react-router-dom";

const ArticleList = () => {
  return (
    <>
      <h1>List of Articles</h1>
      <Link to="/dashboard/articles/create">Create Article</Link>
    </>
  );
};

export default ArticleList;
