import Compressor from "compressorjs";
import Header from "@editorjs/header";
// @ts-ignore
import Image from "@editorjs/image";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Paragraph from "@editorjs/paragraph";
// @ts-ignore
import Marker from "@editorjs/marker";

/* 
    I set @ts-ignore, because the types of those libraries are not included in yarn.
    If you use npm, then can install the types with:
        - npm i --save-dev @types/editorjs__image @types/editorjs__list @types/editorjs__paragraph @types/editorjs__marker
*/

const compressImage = async (file: any): Promise<any> => {
  const uploadImage = (resolve: (any: any) => void, result: Blob) => {
    const reader = new FileReader();

    // $ Save Images Data.
    reader.readAsDataURL(result);
    reader.onload = async () => {
      resolve({
        success: 1,
        file: {
          url: reader.result,
        },
      });
    };
  };

  return new Promise((resolve, reject) => {
    new Compressor(file, {
      maxHeight: 400,
      maxWidth: 700,
      quality: 0.5, // set the desired quality level
      success: (result: any) => {
        uploadImage(resolve, result);
      },
      error: (err: any) => {
        reject(err);
      },
    });
  });
};

const EDITOR_JS_TOOLS = {
  marker: Marker,
  list: List,
  header: Header,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  image: {
    class: Image,
    config: {
      inlineToolbar: true,
      uploader: {
        async uploadByFile(file: any) {
          return await compressImage(file);
        },

        uploadByUrl(url: any) {
          return { success: 1, file: { url: url } };
        },
      },
    },
  },
};

export default EDITOR_JS_TOOLS;
