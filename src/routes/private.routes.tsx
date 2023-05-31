import RoutesWithNotFound from "@/utilities/RoutesWithNotFound.utility";
import { Route } from "react-router-dom";
import PrivateLayout from "@/components/Layouts/Private";
import ArticleCreate from "@/pages/dashboard/article/create";

const PrivateRoutes = () => {
  return (
    <RoutesWithNotFound>
      <Route element={<PrivateLayout />}>
        <Route path="/" element={<h1>Inicio de panel</h1>} />
        <Route path={"articles"} element={<h1>Lista de articulos</h1>} />
        <Route path={"articles/create"} element={<ArticleCreate />} />
        <Route path="article/:article_id" element={<h1>Editar Articulo</h1>} />
        <Route path="settings" element={<h1>Settings</h1>} />
        <Route path={"profile"} element={<h1>Perfil</h1>} />
      </Route>
    </RoutesWithNotFound>
  );
};

export default PrivateRoutes;
