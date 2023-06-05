import { Outlet } from "react-router-dom";
import DashboardMenu from "./dashboardMenu";
import Main from "../styled";
import { ContainerAlert } from "@/ui/toastifyAlerts";
import { useSelector } from "react-redux";
import { AppStore } from "@/lib/redux/store";
import { useEffect } from "react";
import ThemesConfig from "@/config/themes.config";

const PrivateLayout = () => {
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
      // @ts-ignore
      root.style.setProperty("--primary-inverse", ThemesConfig[`${userState.settings.primaryColor}`]["--primary-inverse"]);
    }
  }, [userState.settings.primaryColor]);

  return (
    <Main>
      <DashboardMenu />
      <div id="container_private">
        <Outlet />
      </div>
      <ContainerAlert />
    </Main>
  );
};

export default PrivateLayout;
