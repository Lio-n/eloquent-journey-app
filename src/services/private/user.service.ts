interface UpdateUser {
  email?: string;
  fullname?: string;
  aboutMe?: string;
  avatar?: { url: string; name: string };
}

const updateUserApi = async (data: UpdateUser) => {
  console.log(`🚀 ~ data:`, data);
  return data;
  // try {
  //   if (email !== userData.email) throw { message: "Invalid email" };
  //   if (password !== "johnny27") throw { message: "Wrong password" };

  //   return userData;
  // } catch (err: any) {
  //   throw err?.message;
  // }
};

export default updateUserApi;
