import { Outlet } from "react-router-dom";
import NavMenu from "./navMenu";
import Main from "../styled";

const PublicLayout = () => {
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
