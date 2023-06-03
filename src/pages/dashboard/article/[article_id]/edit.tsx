import { getArticleByIdApi } from "@/services/public/article.service";
import { useEffect, useState } from "react";
import type EditorJS from "@editorjs/editorjs";
import { useParams } from "react-router-dom";
import ArticleInfo from "@/models/article.model";
import EditorBlock from "@/ui/EditorJs";
import FormUpdateArticle from "@/components/Dashboard/Article/formUpdate";

const EditArticleById = () => {
  const { article_id } = useParams();
  const [refEditor, setRef] = useState<EditorJS>();
  const [dataApi, setDataApi] = useState<ArticleInfo>();

  useEffect(() => {
    if (article_id) {
      const dataApi = getArticleByIdApi(parseInt(article_id));

      setDataApi(dataApi);
    }
  }, [article_id]);

  return (
    <>
      <h3 style={{ marginTop: "var(--typography-spacing-vertical)" }}> Edit Article</h3>

      {refEditor && <FormUpdateArticle editorJsRef={refEditor} data={dataApi as any} />}
      {dataApi && <EditorBlock holder="editorjs-container" getRef={setRef} data={dataApi} />}
    </>
  );
};

export default EditArticleById;
