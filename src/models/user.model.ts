interface UserInfo {
  id: number;
  fullname: string;
  email: string;
  aboutMe: string;
  avatar: { url: string; name: string };
}

export default UserInfo;
