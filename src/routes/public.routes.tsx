import RoutesWithNotFound from "@/utilities/RoutesWithNotFound.utility";
import { Route } from "react-router-dom";
import Login from "@/pages/login";
import PublicLayout from "@/components/Layouts/Public";
import Profile from "@/pages/profile";

function PublicRoutes() {
  return (
    <RoutesWithNotFound>
      <Route element={<PublicLayout />}>
        <Route path={"/"} element={<h1>Home</h1>} />
        <Route path="/article/:article_id" element={<h1>Ver Articulo by id</h1>} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/profile"} element={<Profile />} />
      </Route>
    </RoutesWithNotFound>
  );
}

export default PublicRoutes;
