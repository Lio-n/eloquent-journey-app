import MoonIcon from "@/ui/icons/moonIcon";
import SunIcon from "@/ui/icons/sunIcon";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Toggle = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;

  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;

  background-color: var(--contrast-hover);

  svg {
    transition: all 0.2s ease-out;
    color: var(--contrast-inverse);
  }

  &:hover {
    svg {
      transform: rotate(180deg);
    }
  }

  .display_none {
    display: none;
  }
`;

const ToggleTheme = () => {
  const switchTheme = () => {
    const htmlElem = document?.querySelector("html");
    const sunIconElem = document?.getElementById("sunIcon");
    const moonIconElem = document?.getElementById("moonIcon");

    const dataTheme = htmlElem?.getAttribute("data-theme");

    if (dataTheme === "dark") {
      htmlElem?.setAttribute("data-theme", "light");

      moonIconElem?.classList.remove("display_none");
      sunIconElem?.classList.add("display_none");

      return;
    }

    moonIconElem?.classList.add("display_none");
    sunIconElem?.classList.remove("display_none");

    htmlElem?.setAttribute("data-theme", "dark");
    return;
  };

  return (
    <>
      <Toggle onClick={switchTheme}>
        <MoonIcon className="display_none" />
        <SunIcon />
      </Toggle>

      <Outlet />
    </>
  );
};

export default ToggleTheme;
