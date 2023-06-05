import UserInfo from "@/models/user.model";

const MockAvatarAssets = {
  avatar_1: "/assets/avatars/avatar_1.png",
  avatar_2: "/assets/avatars/avatar_2.jpeg",
  avatar_3: "/assets/avatars/avatar_3.jpeg",
  avatar_4: "/assets/avatars/avatar_4.jpeg",
};

const MockUserLoginInfo = {
  email: "john.doe@gmail.com",
  password: "johnny27",
};

const MockUserData: UserInfo = {
  id: 1,
  fullname: "John Doe",
  email: MockUserLoginInfo.email,
  aboutMe: "I’m a mysterious individual who has yet to fill out my bio. One thing’s for certain: I love writing front-end code!",
  avatar: { url: MockAvatarAssets["avatar_1"], name: "avatar.png" },
  settings: {
    primaryColor: "light-blue",
    theme: "dark",
  },
};

const MockEmptyUserState: UserInfo = {
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

/* 
  id = 0, User session inactive. Use MockEmptyUserState.
  id = 1, User session active. Use his data from LocalStorage.
  id = 2, User session inactive, but his data from LocalStorage persist.
*/
export { MockAvatarAssets, MockUserLoginInfo, MockEmptyUserState };
export default MockUserData;
