interface UpdateUser {
  email?: string;
  fullname?: string;
  aboutMe?: string;
  avatar?: { url: string; name: string };
}

const updateUserApi = async (data: UpdateUser) => {
  return data;
};

export default updateUserApi;
