import { Outlet } from "react-router-dom";
import Header from "./header";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <main className="container center_items">
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
