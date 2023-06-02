import { Outlet } from "react-router-dom";
import DashboardMenu from "./dashboardMenu";
import Main from "../styled";

const PrivateLayout = () => {
  return (
    <Main>
      <DashboardMenu />
      <div id="container_private">
        <Outlet />
      </div>
    </Main>
  );
};

export default PrivateLayout;
