import { OutputBlockData } from "@editorjs/editorjs";

interface ArticleInfo {
  id: number;
  title: string;
  description: string;
  thumbnail: { url: string; name: string };
  isPrivate: boolean;
  createdAt: string;
  time: number;
  blocks: OutputBlockData[];
}

export default ArticleInfo;
