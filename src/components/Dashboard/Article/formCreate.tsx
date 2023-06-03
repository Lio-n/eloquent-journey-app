import { useDispatch } from "react-redux";
import { createArticle } from "@/lib/redux/states/articles";
import BroomIcon from "@/ui/icons/broomIcon";
import { AlertInfo, AlertSuccess } from "@/ui/toastifyAlerts";
import { createArticleApi } from "@/services/private/article.service";
import type EditorJS from "@editorjs/editorjs";
import styled from "styled-components";
import delay from "@/utilities/delay.utility";
import validateBody from "./helper/validateBody";

const Form = styled.form`
  width: 100%;
  padding: 0.5rem;

  @media (min-width: 550px) {
    &,
    fieldset {
      display: flex;
    }

    max-height: 5rem;
    gap: 1rem;
    justify-content: center;

    fieldset {
      align-items: center;
    }

    button {
      max-width: 8rem;
    }
  }
`;

const disableElements = (isDisable: boolean): void => {
  const submitBtnElem = document.getElementById("submit_btn") as HTMLButtonElement;
  const cleanBtnElem = document.getElementById("clean_btn") as HTMLButtonElement;
  const makePrivateElem = document.getElementById("makePrivate") as HTMLInputElement;

  submitBtnElem.disabled = isDisable;
  cleanBtnElem.disabled = isDisable;
  makePrivateElem.disabled = isDisable;
};

const FormCreateArticle = ({ editorJsRef }: { editorJsRef: EditorJS }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const isPrivate = e.target.makePrivate.checked;
    const outputData = await editorJsRef?.save();

    const isValid = validateBody(outputData);
    if (!isValid) return;

    AlertInfo("⏳ Creating Article...");

    const submitBtnElem = document.getElementById("submit_btn") as HTMLButtonElement;
    submitBtnElem?.setAttribute("aria-busy", "true");
    disableElements(true);

    delay(async () => {
      const result = await createArticleApi({ article: outputData, isPrivate });
      dispatch(createArticle(result));

      handleCleanArticle();

      AlertSuccess("Article Created!");

      submitBtnElem?.setAttribute("aria-busy", "false");
      disableElements(false);
    });
  };

  const handleCleanArticle = () => editorJsRef?.clear();

  return (
    <Form action="submit" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="makePrivate">
          <input type="checkbox" id="makePrivate" name="makePrivate" role="switch" />
          Make private
        </label>
      </fieldset>
      <button id="submit_btn" onSubmit={handleSubmit}>
        Create
      </button>
      <button id="clean_btn" type="button" onClick={handleCleanArticle}>
        <BroomIcon />
        Clean
      </button>
    </Form>
  );
};

export default FormCreateArticle;
