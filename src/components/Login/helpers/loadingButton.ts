const loadingButton = ({ buttonElem, isLoading }: { buttonElem: HTMLButtonElement; isLoading: boolean }) => {
  if (isLoading) {
    buttonElem?.setAttribute("aria-busy", "true");
    buttonElem.innerText = "Loading";
    buttonElem.disabled = true;

    return;
  }

  buttonElem?.setAttribute("aria-busy", "false");
  buttonElem.innerText = "Login";
  buttonElem.disabled = false;
  return;
};

export default loadingButton;
