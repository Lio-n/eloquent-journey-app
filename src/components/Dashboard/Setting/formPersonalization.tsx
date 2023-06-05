import { updateUser } from "@/lib/redux/states/user";
import { AlertInfo } from "@/ui/toastifyAlerts";
import delay from "@/utilities/delay.utility";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ListAvailableColors from "./listAvailableColors";
import { AppStore } from "@/lib/redux/store";
import { ThemePrimaryColors } from "@/config/themes.config";
import disableElements from "@/utilities/disableSubmitBtn.utility";

const Form = styled.form`
  margin: 0;

  .container_submit_btn {
    display: flex;
    justify-content: flex-end;

    button {
      width: fit-content;
      margin: 0;
    }
  }

  .container_checkboxs {
    @media (min-width: 390px) {
      display: flex;
      gap: 2rem;
    }
  }

  .container__radio_themes {
    display: flex;
    gap: 2rem;
  }
`;

const FormPersonalization = () => {
  const dispatch = useDispatch();
  const userState = useSelector((store: AppStore) => store.user);

  const handleUpdateLocalStorage = (e: any) => {
    e.preventDefault();

    const colorPicked = e.target.querySelector(".picked");

    // @ts-ignore
    const primaryColor = colorPicked?.getAttribute("data-color");

    disableElements(e, true);

    delay(() => {
      dispatch(updateUser({ settings: { ...userState.settings, primaryColor } }));

      disableElements(e, false);

      AlertInfo("changes made!");
    }, 1000);
  };

  return (
    <>
      <details>
        <summary role="button" className="secondary">
          Personalization
        </summary>
        <Form action="submit" onSubmit={handleUpdateLocalStorage}>
          <ListAvailableColors colors={ThemePrimaryColors} pickedColor={userState.settings.primaryColor || "light-blue"} />
          <div className="container_submit_btn">
            <button id="submit_btn" onSubmit={handleUpdateLocalStorage}>
              Save
            </button>
          </div>
        </Form>
      </details>
    </>
  );
};

export default FormPersonalization;
