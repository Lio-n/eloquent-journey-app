interface UserInfo {
  id: number;
  fullname: string;
  email: string;
  aboutMe: string;
  avatar: { url: string; name: string };
  settings: {
    primaryColor: string;
    theme: "light" | "dark";
  };
}

export default UserInfo;
