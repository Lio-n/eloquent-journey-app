import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./states/user";
import articlesSliceReducer from "./states/articles";
import UserInfo from "@/models/user.model";
import ArticleInfo from "@/models/article.model";

export interface AppStore {
  user: UserInfo;
  articles: ArticleInfo[];
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer,
    articles: articlesSliceReducer,
  },
});
