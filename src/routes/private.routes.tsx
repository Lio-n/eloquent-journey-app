import RoutesWithNotFound from "@/utilities/RoutesWithNotFound.utility";
import { Route } from "react-router-dom";
import PrivateLayout from "@/components/Layouts/Private";
import ArticleCreate from "@/pages/dashboard/article/create";
import MyProfile from "@/pages/dashboard/profile";
import ArticleList from "@/pages/dashboard/article/list";
import EditArticleById from "@/pages/dashboard/article/[article_id]/edit";

const PrivateRoutes = () => {
  return (
    <RoutesWithNotFound>
      <Route element={<PrivateLayout />}>
        <Route path="/" element={<MyProfile />} />
        <Route path={"articles/list"} element={<ArticleList />} />
        <Route path={"articles/create"} element={<ArticleCreate />} />
        <Route path="articles/:article_id/edit" element={<EditArticleById />} />

        <Route path="settings" element={<h1>Settings</h1>} />
      </Route>
    </RoutesWithNotFound>
  );
};

export default PrivateRoutes;
