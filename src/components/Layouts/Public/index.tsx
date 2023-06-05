import { Outlet } from "react-router-dom";
import NavMenu from "./navMenu";
import Main from "../styled";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppStore } from "@/lib/redux/store";
import ThemesConfig from "@/config/themes.config";

const PublicLayout = () => {
  const userState = useSelector((store: AppStore) => store.user);

  useEffect(() => {
    const root = document.documentElement;

    if (userState.settings.primaryColor) {
      // @ts-ignore
      root.style.setProperty("--primary", ThemesConfig[`${userState.settings.primaryColor}`]["--primary"]);
      // @ts-ignore
      root.style.setProperty("--primary-hover", ThemesConfig[`${userState.settings.primaryColor}`]["--primary-hover"]);
      // @ts-ignore
      root.style.setProperty("--primary-focus", ThemesConfig[`${userState.settings.primaryColor}`]["--primary-focus"]);
    }
  }, [userState.settings.primaryColor]);

  return (
    <Main>
      <NavMenu />
      <div id="container_public">
        <Outlet />
      </div>
    </Main>
  );
};

export default PublicLayout;
