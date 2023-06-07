import { AppStore } from "@/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import countCharacters from "./helpers/countCharacters";
import { updateUser } from "@/lib/redux/states/user";
import updateUserApi from "@/services/private/user.service";
import parseDataForm from "@/utilities/parseDataForm.utility";
import delay from "@/utilities/delay.utility";
import Figure from "./figure";
import { useState } from "react";
import styled from "styled-components";
import disableElements from "@/utilities/disableSubmitBtn.utility";
import { AlertInfo } from "@/ui/toastifyAlerts";

const Form = styled.form`
  margin: 0;

  #aboutMe {
    resize: none;
  }

  #form_btn {
    margin: 0;
  }
  @media (min-width: 992px) {
    display: flex;
    gap: 2rem;
  }
`;

const FormProfile = () => {
  const dispatch = useDispatch();
  const userState = useSelector((store: AppStore) => store.user);
  const [avatar, setAvatar] = useState(userState.avatar);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    disableElements(e, true);

    const { fullname, aboutMe } = parseDataForm(e);

    delay(async () => {
      const result = await updateUserApi({ fullname, aboutMe, avatar });

      if (result) {
        dispatch(updateUser(result));

        AlertInfo("changes made!");

        disableElements(e, false);
      }
    });
  };

  return (
    <>
      <Form action="submit" onSubmit={handleSubmit}>
        <Figure avatar={avatar} onChange={setAvatar} />

        <div>
          <div className="grid">
            <label htmlFor="email">
              Email address
              <input
                type="email"
                id="email"
                name="email"
                placeholder={userState.email}
                aria-label="Input Email"
                defaultValue={userState.email}
                readOnly
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
          </div>

          <label htmlFor="aboutMe">
            AboutMe
            <textarea
              onInput={countCharacters}
              name="aboutMe"
              id="aboutMe"
              cols={20}
              rows={3}
              maxLength={300}
              placeholder={userState.aboutMe}
              defaultValue={userState.aboutMe}
              aria-label="Input AboutMe"
              required
            />
            <small style={{ textAlign: "end" }}>
              Characters remaining: <strong id="charCounter">{300 - userState.aboutMe.length}</strong>
            </small>
          </label>
          <button id="submit_btn" onSubmit={handleSubmit}>
            <strong>Update Profile</strong>
          </button>
        </div>
      </Form>
    </>
  );
};

export default FormProfile;
