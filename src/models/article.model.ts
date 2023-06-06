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

type ArticleThumbnailInfo = {
  id: number;
  title: string;
  description: string;
  thumbnail: { url: string; name: string };
  createdAt: string;
};

export type { ArticleListInfo, ArticleThumbnailInfo };
export default ArticleInfo;
