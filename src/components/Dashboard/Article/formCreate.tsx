import { useDispatch } from "react-redux";
import { createArticle } from "@/lib/redux/states/articles";
import BroomIcon from "@/ui/icons/broomIcon";
import { AlertInfo, AlertSuccess } from "@/ui/toastifyAlerts";
import createArticleApi from "@/services/private/article.service";
import delay from "@/utilities/delay";
import type EditorJS from "@editorjs/editorjs";
import styled from "styled-components";

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

const validateText = (inputText: string) => {
  // Expresión regular para verificar si la cadena contiene una o más repeticiones de '&nbsp;'
  const regex = /^(&nbsp;)+$/;
  // Comprueba si el texto cumple con la expresión regular
  return regex.test(inputText);
};

const FormCreateArticle = ({ editorJsRef }: { editorJsRef: EditorJS }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const submitBtnElem = document.getElementById("submit_btn") as HTMLButtonElement;

    const isPrivate = e.target.makePrivate.checked;
    const outputData = await editorJsRef?.save();

    if (!outputData.blocks.length) {
      AlertInfo("Must add information!");
      return;
    }

    const hasTitle = outputData.blocks.find((item: any) => item.type === "header") || { data: { text: "" } };
    const hasImage = outputData.blocks.find((item: any) => item.type === "image");

    if (!!hasTitle.data.text && validateText(hasTitle.data.text)) {
      AlertInfo(
        <p>
          Must add a title of type <strong>Heading</strong>!
        </p>
      );
      return;
    }

    if (!hasImage) {
      AlertInfo(<p>Must add an image!</p>);
      return;
    }

    AlertInfo("⏳ Creating Article...");

    submitBtnElem?.setAttribute("aria-busy", "true");
    submitBtnElem.disabled = true;

    delay(async () => {
      const result = await createArticleApi({ article: outputData, isPrivate });
      dispatch(createArticle(result));

      AlertSuccess("Article Created!");

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
        Create
      </button>
      <button type="button" onClick={handleCleanArticle}>
        <BroomIcon />
        Clean
      </button>
    </Form>
  );
};

export default FormCreateArticle;
