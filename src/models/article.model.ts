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

type ArticleListInfo = {
  id: number;
  title: string;
  isPrivate: boolean;
  createdAt: string;
};

export type { ArticleListInfo };
export default ArticleInfo;
