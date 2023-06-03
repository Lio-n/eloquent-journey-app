import { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import styled from "styled-components";
import EDITOR_JS_TOOLS from "./editorJsTools";

const EditorRoot = styled.div`
  padding: 0 4rem;
  border-radius: 10px;
  overflow: auto;
  width: 100%;
  height: calc(-25rem + 100vh);
  padding: 0 1rem;

  @media (min-width: 550px) {
    height: calc(-18rem + 100vh);
  }

  @media (min-width: 840px) {
    height: initial;
  }

  .ce-toolbar__actions {
    background-color: var(--accordion-border-color) !important;

    svg {
      color: var(--color);
    }
  }

  /*  Styles for @editorjs -> Remove caption [START]*/
  & .image-tool__caption {
    display: none;
  }

  & .ce-block__content li {
    list-style-type: unset;
  }
  /*  Styles for @editorjs -> Remove caption [END]*/

  & img {
    margin: 0 auto;
  }

  li {
    list-style-type: unset;
  }

  & .cdx-marker {
    background-color: rgb(245 235 111 / 50%);
  }
`;

const removeDraggableImage = () => {
  // get all the images in the editor
  const images = document.querySelectorAll(".image-tool__image-picture");

  // loop through each image and remove the onMouseOver event
  images.forEach((image) => {
    if (!image.getAttribute("draggable")) {
      image.setAttribute("draggable", "false");
    }
  });
};

const initBlog = {
  blocks: [
    {
      type: "header",
      data: {
        text: "Welcome!",
        level: 2,
      },
    },
  ],
};

type Props = {
  data?: OutputData;
  holder: string;
  getRef: any;
};

const Editor = ({ data = initBlog, holder, getRef }: Props) => {
  //add a reference to editor
  const ref = useRef<EditorJS>();

  //initialize editorjs
  useEffect(() => {
    const EditorJsInitialConfig = {
      holder,
      tools: EDITOR_JS_TOOLS,
      data,
      async onChange() {
        removeDraggableImage();
      },
      hideToolbar: false,
    };

    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS(EditorJsInitialConfig);
      ref.current = editor;

      getRef(ref.current);
    }

    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return <EditorRoot id={holder} />;
};

export default memo(Editor);
