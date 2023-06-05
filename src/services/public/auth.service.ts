import userData, { MockUserLoginInfo } from "@/Mock/user.mock.";
import { UserKey } from "@/lib/redux/states/user";
import UserInfo from "@/models/user.model";
import { getLocalStorage } from "@/utilities/localStorage.utility";

const loginApi = async ({ email, password }: { email: string; password: string }): Promise<UserInfo> => {
  try {
    if (email !== MockUserLoginInfo.email) throw { message: "Invalid email" };
    if (password !== MockUserLoginInfo.password) throw { message: "Wrong password" };

    let userLocalStorageData = getLocalStorage(UserKey) && JSON.parse(getLocalStorage(UserKey) as string);

    if (userLocalStorageData?.id === 2) {
      userLocalStorageData.id = 1;
      return userLocalStorageData;
    }

    return userData;
  } catch (err: any) {
    throw err?.message;
  }
};

export default loginApi;
