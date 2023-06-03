import type { OutputBlockData } from "@editorjs/editorjs";

const cleanArticleData = (blocks: OutputBlockData[]) => {
  let title: string = "";
  let description: string = "";
  let thumbnail: { name: string; url: string } = { name: "", url: "" };

  for (let i = 0; i < blocks.length; i++) {
    if (!!thumbnail.url && !!title && !!description) break;

    // * Get Title
    if (!title && blocks[i].type === "header") {
      title = blocks[i].data.text.replace(/\&nbsp;/g, "");
      continue;
    }

    // * Save Description
    if (!description && blocks[i].type === "paragraph") {
      description = blocks[i].data.text;
      continue;
    }

    // * Get thumbnail Base64
    if (!thumbnail.url && blocks[i].type === "image") {
      thumbnail = { name: blocks[i].id || "", url: blocks[i].data.file.url || "" };
      continue;
    }
  }

  return { title, description, thumbnail };
};

export default cleanArticleData;
