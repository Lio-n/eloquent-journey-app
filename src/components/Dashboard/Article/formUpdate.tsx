import { useDispatch } from "react-redux";
import { deleteArticleById, updateArticleById } from "@/lib/redux/states/articles";
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
import TrashIcon from "@/ui/icons/trashIcon";

const Form = styled.form`
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
      max-width: 9rem;
      margin: 0;
    }
  }

  .form__container_buttons {
    display: flex;
    gap: 0.5rem;

    button {
      width: fit-content;
      height: fit-content;
    }
  }
`;

const disableElements = (isDisable: boolean): void => {
  const submitBtnElem = document.getElementById("submit_btn") as HTMLButtonElement;
  const cleanBtnElem = document.getElementById("clean_btn") as HTMLButtonElement;
  const makePrivateElem = document.getElementById("makePrivate") as HTMLInputElement;
  const deleteBtnElem = document.getElementById("delete_btn") as HTMLInputElement;

  submitBtnElem.disabled = isDisable;
  cleanBtnElem.disabled = isDisable;
  makePrivateElem.disabled = isDisable;
  deleteBtnElem.disabled = isDisable;
};

const FormUpdateArticle = ({ editorJsRef, data }: { editorJsRef: EditorJS; data: ArticleInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const inputCheckbox = document.getElementById("makePrivate") as HTMLInputElement;
    inputCheckbox.checked = data.isPrivate;
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const isPrivate = e.target.makePrivate.checked;
    const outputData = await editorJsRef?.save();

    const isValid = validateBody(outputData);
    if (!isValid) return;

    AlertInfo("⏳ Updating Article...");

    const submitBtnElem = document.getElementById("submit_btn") as HTMLButtonElement;
    submitBtnElem?.setAttribute("aria-busy", "true");
    disableElements(true);

    delay(async () => {
      const result = await updateArticleApi({ article: outputData, isPrivate, id: data.id });

      dispatch(updateArticleById(result));

      AlertSuccess("Article Updated!");

      navigate("/dashboard/articles/list");

      submitBtnElem?.setAttribute("aria-busy", "false");
      disableElements(false);
    });
  };

  const handleCleanArticle = () => editorJsRef?.clear();
  const handleDeleteArticle = () => {
    disableElements(true);
    const deleteBtnElem = document.getElementById("delete_btn") as HTMLInputElement;
    deleteBtnElem?.setAttribute("aria-busy", "true");

    delay(async () => {
      dispatch(deleteArticleById({ id: data.id }));

      AlertSuccess("Article deleted!");
      navigate("/dashboard/articles/list");
    });
  };

  return (
    <Form action="submit" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="makePrivate">
          <input type="checkbox" id="makePrivate" name="makePrivate" role="switch" />
          Make private
        </label>
      </fieldset>

      <div className="form__container_buttons">
        <button id="submit_btn" onSubmit={handleSubmit}>
          Update
        </button>
        <button id="clean_btn" type="button" onClick={handleCleanArticle}>
          <BroomIcon />
          Clean
        </button>
        <button id="delete_btn" type="button" onClick={handleDeleteArticle}>
          <TrashIcon />
          Delete
        </button>
      </div>
    </Form>
  );
};

export default FormUpdateArticle;
