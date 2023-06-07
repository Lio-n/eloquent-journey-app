import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AppStore } from "@/lib/redux/store";

export const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.id === 1 ? <Outlet /> : <Navigate replace to="login" />;
};

export default AuthGuard;
