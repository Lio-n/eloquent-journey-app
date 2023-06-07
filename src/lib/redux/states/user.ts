import { createSlice } from "@reduxjs/toolkit";
import UserInfo from "@/models/user.model";
import { persistLocalStorage } from "@/utilities/localStorage.utility";
import MockUserData, { MockEmptyUserState } from "@/Mock/user.mock.";

export const UserKey = "user";

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : MockEmptyUserState,
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
