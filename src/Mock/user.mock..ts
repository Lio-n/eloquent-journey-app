import UserInfo from "@/models/user.model";

const avatarAssets = {
  avatar_1: "/assets/avatars/avatar_1.png",
  avatar_2: "/assets/avatars/avatar_2.jpeg",
  avatar_3: "/assets/avatars/avatar_3.jpeg",
  avatar_4: "/assets/avatars/avatar_4.jpeg",
};

const MockUserData: UserInfo = {
  id: 1,
  fullname: "John Doe",
  email: "john.doe@gmail.com",
  aboutMe: "I’m a mysterious individual who has yet to fill out my bio. One thing’s for certain: I love writing front-end code!",
  avatar: { url: avatarAssets["avatar_1"], name: "avatar.png" },
};

export { avatarAssets };
export default MockUserData;
