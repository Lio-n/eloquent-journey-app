import { getArticleByIdApi } from "@/services/public/article.service";
import { lazy, useEffect, useState } from "react";
import type EditorJS from "@editorjs/editorjs";
import { useNavigate, useParams } from "react-router-dom";
import ArticleInfo from "@/models/article.model";

const LazyFormUpdateArticle = lazy(() => import("@/components/Dashboard/Article/formUpdate"));
const LazyEditorBlock = lazy(() => import("@/ui/EditorJs"));

const EditArticleById = () => {
  const { article_id } = useParams();
  const [refEditor, setRef] = useState<EditorJS>();
  const [dataApi, setDataApi] = useState<ArticleInfo>();
  const navigate = useNavigate();

  useEffect(() => {
    if (article_id) {
      const dataApi = getArticleByIdApi({ id: parseInt(article_id), hasToken: true });

      if (!dataApi) navigate("/dashboard/articles/list");

      setDataApi(dataApi);
    }
  }, [article_id]);

  return (
    <>
      <h3 style={{ marginTop: "var(--typography-spacing-vertical)" }}> Edit Article</h3>

      {refEditor && <LazyFormUpdateArticle editorJsRef={refEditor} data={dataApi as any} />}
      {dataApi && <LazyEditorBlock holder="editorjs-container" getRef={setRef} data={dataApi} />}
    </>
  );
};

export default EditArticleById;
