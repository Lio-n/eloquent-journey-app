import { Outlet } from "react-router-dom";
import DashboardMenu from "./dashboardMenu";
import Main from "../styled";
import { ContainerAlert } from "@/ui/toastifyAlerts";

const PrivateLayout = () => {
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
