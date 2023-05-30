import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <>
      <h1>PrivateLayout</h1>
      <Outlet />
    </>
  );
};

export default PrivateLayout;
