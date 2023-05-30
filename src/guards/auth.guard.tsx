import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicPaths } from "@/routes/path.routes";
import { AppStore } from "@/lib/redux/store";

export const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);

  // return userState.id ? <Outlet /> : <Navigate replace to={PublicPaths.LOGIN} />;
  return <Outlet />;
};

export default AuthGuard;
