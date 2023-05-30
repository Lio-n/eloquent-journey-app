import userData from "@/Mock/user.mock.";

const loginApi = async ({ email, password }: { email: string; password: string }) => {
  try {
    if (email !== userData.email) throw { message: "Invalid email" };
    if (password !== "johnny27") throw { message: "Wrong password" };

    return userData;
  } catch (err: any) {
    throw err?.message;
  }
};

export default loginApi;
