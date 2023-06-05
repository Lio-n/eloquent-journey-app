import { removeArticles } from "@/lib/redux/states/articles";
import { resetUser } from "@/lib/redux/states/user";
import { AlertInfo } from "@/ui/toastifyAlerts";
import delay from "@/utilities/delay.utility";
import disableElements from "@/utilities/disableSubmitBtn.utility";
import { useDispatch } from "react-redux";
import styled from "styled-components";

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
`;

const FormLocalStorage = () => {
  const dispatch = useDispatch();

  const handleUpdateLocalStorage = (e: any) => {
    e.preventDefault();

    const resetUserCheckbox = e.target.resetUser.checked;
    const resetArticlesCheckbox = e.target.resetArticles.checked;

    disableElements(e, true);

    delay(async () => {
      if (resetUserCheckbox) dispatch(resetUser());

      if (resetArticlesCheckbox) dispatch(removeArticles());

      disableElements(e, false);

      AlertInfo("changes made!");

      e.target.reset();
    });
  };

  return (
    <>
      <details>
        <summary role="button" className="secondary">
          LocalStorage
        </summary>
        <Form action="submit" onSubmit={handleUpdateLocalStorage}>
          <fieldset className="container_checkboxs">
            <label htmlFor="resetUser">
              <input type="checkbox" id="resetUser" name="resetUser" role="switch" />
              Reset user
            </label>

            <label htmlFor="resetArticles">
              <input type="checkbox" id="resetArticles" name="resetArticles" role="switch" />
              Delete All Articles
            </label>
          </fieldset>
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

export default FormLocalStorage;
