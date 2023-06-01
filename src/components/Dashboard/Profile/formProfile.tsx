import { AppStore } from "@/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import countCharacters from "./helpers/countCharacters";
import { updateUser } from "@/lib/redux/states/user";
import updateUserApi from "@/services/private/user.service";
import parseDataForm from "@/utilities/parseDataForm";
import delay from "@/utilities/delay";
import Figure from "./figure";
import { useState } from "react";

const FormProfile = () => {
  const dispatch = useDispatch();
  const userState = useSelector((store: AppStore) => store.user);
  const [avatar, setAvatar] = useState(userState.avatar);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const buttonElem = document.getElementById("form_btn") as HTMLButtonElement;

    const { email, fullname, aboutMe } = parseDataForm(e);

    buttonElem?.setAttribute("aria-busy", "true");
    buttonElem.disabled = true;

    delay(async () => {
      const result = await updateUserApi({ email, fullname, aboutMe, avatar });

      if (result) {
        dispatch(updateUser(result));

        buttonElem?.setAttribute("aria-busy", "false");
        buttonElem.disabled = false;
      }
    });
  };

  return (
    <>
      <form action="submit" onSubmit={handleSubmit} style={{ margin: "0" }}>
        <Figure avatar={avatar} onChange={setAvatar} />

        <div>
          <label htmlFor="email">
            Email address
            <input
              type="email"
              id="email"
              name="email"
              placeholder={userState.email}
              aria-label="Input Email"
              defaultValue={userState.email}
              required
            />
          </label>

          <label htmlFor="fullname">
            Fullname
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder={userState.fullname}
              aria-label="Input Fullname"
              defaultValue={userState.fullname}
              required
            />
          </label>

          <label htmlFor="aboutMe">
            AboutMe
            <textarea
              onInput={countCharacters}
              name="aboutMe"
              id="aboutMe"
              cols={20}
              rows={5}
              maxLength={300}
              placeholder={userState.aboutMe}
              defaultValue={userState.aboutMe}
              aria-label="Input AboutMe"
              style={{ resize: "none" }}
              required
            />
            <small style={{ textAlign: "end" }}>
              Characters remaining: <strong id="charCounter">{300 - userState.aboutMe.length}</strong>
            </small>
          </label>
        </div>
        <button id="form_btn" onSubmit={handleSubmit} style={{ margin: "0" }}>
          <strong>Update Profile</strong>
        </button>
      </form>
    </>
  );
};

export default FormProfile;
