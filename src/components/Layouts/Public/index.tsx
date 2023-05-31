import { Outlet } from "react-router-dom";
import NavMenu from "./navMenu";

const PublicLayout = () => {
  return (
    <>
      <NavMenu />
      <main className="container center_items">
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
