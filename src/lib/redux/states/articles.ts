import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { getLocalStorage, persistLocalStorage } from "@/utilities/localStorage.utility";
import ArticleInfo from "@/models/article.model";
import MockArticlesHits from "@/Mock/articles.mock";

export const ArticlesKey = "articles";

const initialState = getLocalStorage(ArticlesKey) ? JSON.parse(getLocalStorage(ArticlesKey) as string) : MockArticlesHits;

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
    resetArticles: () => {
      persistLocalStorage<ArticleInfo[]>(ArticlesKey, MockArticlesHits);

      return MockArticlesHits;
    },
  },
});

export const { createArticle, updateArticleById, deleteArticleById, resetArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
