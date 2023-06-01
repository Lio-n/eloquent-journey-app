import RoutesWithNotFound from "@/utilities/RoutesWithNotFound.utility";
import { Route } from "react-router-dom";
import PrivateLayout from "@/components/Layouts/Private";
import ArticleCreate from "@/pages/dashboard/article/create";
import MyProfile from "@/pages/dashboard/profile";
import ArticleList from "@/pages/dashboard/article/list";

const PrivateRoutes = () => {
  return (
    <RoutesWithNotFound>
      <Route element={<PrivateLayout />}>
        <Route path="/" element={<MyProfile />} />
        <Route path={"articles"} element={<ArticleList />} />
        <Route path={"articles/create"} element={<ArticleCreate />} />
        <Route path="article/:article_id" element={<h1>Editar Articulo</h1>} />
        <Route path="settings" element={<h1>Settings</h1>} />
        {/* <Route path={"profile"} element={<MyProfile />} /> */}
      </Route>
    </RoutesWithNotFound>
  );
};

export default PrivateRoutes;
