import { updateUser } from "@/lib/redux/states/user";
import { AppStore } from "@/lib/redux/store";
import MoonIcon from "@/ui/icons/moonIcon";
import SunIcon from "@/ui/icons/sunIcon";
import switchTheme from "@/utilities/switchTheme.utility";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Toggle = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  width: 2.5rem;

  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;

  background-color: var(--contrast-hover);

  & {
    svg {
      width: 100%;

      transition: all 0.2s ease-out;
      color: var(--contrast-inverse);
    }
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
  const userState = useSelector((store: AppStore) => store.user);
  const [theme, setTheme] = useState(userState.id === 1 ? userState.settings.theme : "dark");
  const dispatch = useDispatch();

  const changeTheme = () => dispatch(updateUser({ settings: { ...userState.settings, theme } }));

  useEffect(() => {
    console.log(theme);
    userState.id === 1 && changeTheme();
    switchTheme(theme);
  }, [theme]);

  return (
    <>
      <Toggle onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <MoonIcon className="display_none" />
        <SunIcon />
      </Toggle>

      <Outlet />
    </>
  );
};

export default ToggleTheme;
