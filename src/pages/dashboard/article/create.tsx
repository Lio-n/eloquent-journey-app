import { lazy, useState } from "react";
import EditorBlock from "@/ui/EditorJs";
import type EditorJS from "@editorjs/editorjs";

const LazyFormCreateArticle = lazy(() => import("@/components/Dashboard/Article/formCreate"));

const ArticleCreate = () => {
  const [refEditor, setRef] = useState<EditorJS>();

  return (
    <>
      <h3 style={{ marginTop: "var(--typography-spacing-vertical)" }}>Create Article</h3>

      {refEditor && <LazyFormCreateArticle editorJsRef={refEditor} />}
      <EditorBlock holder="editorjs-container" getRef={setRef} />
    </>
  );
};

export default ArticleCreate;
