import { useState } from "react";
import EditorBlock from "@/ui/EditorJs";
import FormCreateArticle from "@/components/Dashboard/Article/formCreate";
import type EditorJS from "@editorjs/editorjs";

const ArticleCreate = () => {
  const [refEditor, setRef] = useState<EditorJS>();

  return (
    <>
      <h3 style={{ marginTop: "var(--typography-spacing-vertical)" }}>Create Article</h3>

      {refEditor && <FormCreateArticle editorJsRef={refEditor} />}
      <EditorBlock holder="editorjs-container" getRef={setRef} />
    </>
  );
};

export default ArticleCreate;
