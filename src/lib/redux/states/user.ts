import { createSlice } from "@reduxjs/toolkit";
import UserInfo from "@/models/user.model";
import { clearLocalStorage, persistLocalStorage } from "@/utilities/localStorage.utility";

export const EmptyUserState: UserInfo = {
  id: 0,
  fullname: "",
  email: "",
  aboutMe: "",
  avatar: { url: "", name: "" },
};

export const UserKey = "user";

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage<UserInfo>(UserKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<UserInfo>(UserKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorage(UserKey);
      return EmptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
