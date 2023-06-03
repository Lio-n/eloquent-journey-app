import { AlertInfo } from "@/ui/toastifyAlerts";
import { OutputData } from "@editorjs/editorjs";

const validateText = (inputText: string) => {
  // Expresión regular para verificar si la cadena contiene una o más repeticiones de '&nbsp;'
  const regex = /^(&nbsp;)+$/;
  // Comprueba si el texto cumple con la expresión regular
  return regex.test(inputText);
};

const validateBody = (outputData: OutputData) => {
  if (!outputData.blocks.length) {
    AlertInfo("Must add information!");
    return;
  }

  const hasTitle = outputData.blocks.find((item: any) => item.type === "header") || { data: { text: "" } };
  const hasImage = outputData.blocks.find((item: any) => item.type === "image");

  if (!(!!hasTitle.data.text && !validateText(hasTitle.data.text))) {
    AlertInfo(`Must add a title of type Heading!`);
    return;
  }

  if (!hasImage) {
    AlertInfo(`Must add an image!`);
    return;
  }

  return true;
};

export default validateBody;
