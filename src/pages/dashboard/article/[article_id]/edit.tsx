import { useParams } from "react-router-dom";

const ArticleById = () => {
  const { article_id } = useParams();

  return (
    <>
      <h1> Edit Article by id : {article_id}</h1>
    </>
  );
};

export default ArticleById;
