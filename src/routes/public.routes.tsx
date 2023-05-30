import RoutesWithNotFound from "@/utilities/RoutesWithNotFound.utility";
import { Route } from "react-router-dom";
import { PublicPaths } from "./path.routes";
import Login from "@/pages/login";

function PublicRoutes() {
  return (
    <RoutesWithNotFound>
      <Route path={PublicPaths.HOME} element={<h1>Home</h1>} />
      <Route path="/article/:article_id" element={<h1>Ver Articulo by id</h1>} />
      <Route path={PublicPaths.LOGIN} element={<Login />} />
      <Route path={PublicPaths.PROFILE} element={<h1>Perfil de author</h1>} />
    </RoutesWithNotFound>
  );
}

export default PublicRoutes;
