const disableElements = (e: any, isDisable: boolean): void => {
  const submitBtnElem = e.target.querySelector("#submit_btn") as HTMLButtonElement;

  submitBtnElem?.setAttribute("aria-busy", `${isDisable}`);
  submitBtnElem.disabled = isDisable;
};

export default disableElements;
