import { createSlice } from "@reduxjs/toolkit";
import UserInfo from "@/models/user.model";
import { persistLocalStorage } from "@/utilities/localStorage.utility";
import MockUserData from "@/Mock/user.mock.";

export const EmptyUserState: UserInfo = {
  id: 0,
  fullname: "",
  email: "",
  aboutMe: "",
  avatar: { url: "", name: "" },
  settings: {
    primaryColor: "",
    theme: "dark",
  },
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
      persistLocalStorage<UserInfo>(UserKey, MockUserData);

      return MockUserData;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
