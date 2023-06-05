const switchTheme = (switchTo: "light" | "dark"): void => {
  const htmlElem = document?.querySelector("html");
  const sunIconElem = document?.getElementById("sunIcon");
  const moonIconElem = document?.getElementById("moonIcon");

  const dataTheme = switchTo;

  const switchToDark = () => {
    moonIconElem?.classList.add("display_none");
    sunIconElem?.classList.remove("display_none");

    htmlElem?.setAttribute("data-theme", "dark");
  };

  const switchToLight = () => {
    moonIconElem?.classList.remove("display_none");
    sunIconElem?.classList.add("display_none");

    htmlElem?.setAttribute("data-theme", "light");
  };

  dataTheme === "light" ? switchToLight() : switchToDark();
};

export default switchTheme;
