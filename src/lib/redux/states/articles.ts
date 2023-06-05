import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { clearLocalStorage, getLocalStorage, persistLocalStorage } from "@/utilities/localStorage.utility";
import ArticleInfo from "@/models/article.model";

export const EmptyArticlesState: ArticleInfo[] = [];

export const ArticlesKey = "articles";
const initialState = getLocalStorage(ArticlesKey) ? JSON.parse(getLocalStorage(ArticlesKey) as string) : EmptyArticlesState;

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    createArticle: (state, action: PayloadAction<ArticleInfo>) => {
      state.push(action.payload);

      persistLocalStorage<ArticleInfo[]>(ArticlesKey, state);
    },
    updateArticleById: (state, action: PayloadAction<ArticleInfo>) => {
      const newState = current(state).map((item: ArticleInfo) => {
        if (item.id === action.payload.id) {
          item = action.payload;
        }

        return item;
      });

      persistLocalStorage<ArticleInfo[]>(ArticlesKey, newState);

      return newState;
    },
    deleteArticleById: (state, action: PayloadAction<{ id: number }>) => {
      const newState = current(state).filter((item: ArticleInfo) => item.id !== action.payload.id);

      persistLocalStorage<ArticleInfo[]>(ArticlesKey, newState);

      return newState;
    },
    removeArticles: () => {
      clearLocalStorage(ArticlesKey);

      return [];
    },
  },
});

export const { createArticle, updateArticleById, deleteArticleById, removeArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
