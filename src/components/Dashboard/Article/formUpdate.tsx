import { useDispatch } from "react-redux";
import { updateArticle } from "@/lib/redux/states/articles";
import BroomIcon from "@/ui/icons/broomIcon";
import { AlertInfo, AlertSuccess } from "@/ui/toastifyAlerts";
import { updateArticleApi } from "@/services/private/article.service";
import type EditorJS from "@editorjs/editorjs";
import styled from "styled-components";
import delay from "@/utilities/delay.utility";
import ArticleInfo from "@/models/article.model";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const FormUpdateArticle = ({ editorJsRef, data }: { editorJsRef: EditorJS; data: ArticleInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const inputCheckbox = document.getElementById("makePrivate") as HTMLInputElement;
    inputCheckbox.checked = data.isPrivate;
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const submitBtnElem = document.getElementById("submit_btn") as HTMLButtonElement;

    const isPrivate = e.target.makePrivate.checked;
    const outputData = await editorJsRef?.save();

    const isValid = validateBody(outputData);
    if (!isValid) return;

    AlertInfo("⏳ Updating Article...");

    submitBtnElem?.setAttribute("aria-busy", "true");
    submitBtnElem.disabled = true;

    delay(async () => {
      const result = await updateArticleApi({ article: outputData, isPrivate, id: data.id });

      dispatch(updateArticle(result));

      AlertSuccess("Article Updated!");

      navigate("/dashboard/articles/list", { replace: true });

      submitBtnElem?.setAttribute("aria-busy", "false");
      submitBtnElem.disabled = false;
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
        Update
      </button>
      <button type="button" onClick={handleCleanArticle}>
        <BroomIcon />
        Clean
      </button>
    </Form>
  );
};

export default FormUpdateArticle;
