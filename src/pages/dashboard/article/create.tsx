import { useDispatch, useSelector } from "react-redux";
import ArticleInfo from "@/models/article.model";
import { createArticle } from "@/lib/redux/states/articles";
import { AppStore } from "@/lib/redux/store";
import { useEffect } from "react";

const FormCreateArticle = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const title = e.target.title.value;

    const MockArticle: ArticleInfo = {
      id: Math.floor(Math.random() * 100),
      title,
      description: "lorem",
      createdAt: "Today",
      blocks: [],
    };
    dispatch(createArticle(MockArticle));
  };

  return (
    <>
      <form action="submit" onSubmit={handleSubmit} style={{ margin: "0" }}>
        <label htmlFor="title">
          Title
          <input type="text" id="title" name="title" placeholder="Lorem ipsum..." required />
        </label>

        <button id="form_btn" onSubmit={handleSubmit} style={{ margin: "0" }}>
          Create Article
        </button>
      </form>
    </>
  );
};

const ArticleCreate = () => {
  const articlesState = useSelector((store: AppStore) => store.articles);

  useEffect(() => {
    console.log("Effect: ", articlesState);
  }, [articlesState]);

  return (
    <>
      <h1>Create Article</h1>

      <FormCreateArticle />

      {articlesState.length > 0 && (
        <ul>
          {articlesState.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ArticleCreate;
