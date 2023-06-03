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
    updateArticle: (state, action) => {
      const newState = current(state).map((item: ArticleInfo) => {
        if (item.id === action.payload.id) {
          item = action.payload;
        }

        return item;
      });

      persistLocalStorage<ArticleInfo[]>(ArticlesKey, newState);

      return newState;
    },
    /* ,
    resetUser: () => {
      // clearLocalStorage(UserKey);
      return EmptyArticlesState;
    }, */
  },
});

export const { createArticle, updateArticle } = articlesSlice.actions;

export default articlesSlice.reducer;
