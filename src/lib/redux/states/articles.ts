import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, persistLocalStorage } from "@/utilities/localStorage.utility";
import ArticleInfo from "@/models/article.model";

export const EmptyArticlesState: ArticleInfo[] = [];

export const ArticlesKey = "articles";

export const articlesSlice = createSlice({
  name: "articles",
  initialState: localStorage.getItem(ArticlesKey) ? JSON.parse(localStorage.getItem(ArticlesKey) as string) : EmptyArticlesState,
  reducers: {
    createArticle: (state, action: PayloadAction<ArticleInfo>) => {
      state.push(action.payload);
      persistLocalStorage<ArticleInfo[]>(ArticlesKey, state);
    } /* ,
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      // persistLocalStorage<UserInfo>(UserKey, result);
      return result;
    },
    resetUser: () => {
      // clearLocalStorage(UserKey);
      return EmptyArticlesState;
    }, */,
  },
});

export const { createArticle /*  updateUser, resetUser */ } = articlesSlice.actions;

export default articlesSlice.reducer;
