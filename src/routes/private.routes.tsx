import RoutesWithNotFound from "@/utilities/RoutesWithNotFound.utility";
import { Route } from "react-router-dom";
import { PrivatePaths } from "./path.routes";
import PrivateLayout from "@/components/Layouts/Private";

const PrivateRoutes = () => {
  return (
    <RoutesWithNotFound>
      <Route element={<PrivateLayout />}>
        <Route path="/" element={<h1>Inicio de panel</h1>} />
        <Route path={PrivatePaths.ARTICLE_LIST} element={<h1>Lista de articulos</h1>} />
        <Route path="/article/:article_id" element={<h1>Editar Articulo</h1>} />
        <Route path={PrivatePaths.PROFILE} element={<h1>Perfil</h1>} />
      </Route>
    </RoutesWithNotFound>
  );
};

export default PrivateRoutes;
