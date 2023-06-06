import RoutesWithNotFound from "@/utilities/RoutesWithNotFound.utility";
import { Route } from "react-router-dom";
import Login from "@/pages/login";
import PublicLayout from "@/components/Layouts/Public";
import Profile from "@/pages/profile";
import Home from "@/pages";
import ArticleById from "@/pages/article/[article_id]";

function PublicRoutes() {
  return (
    <RoutesWithNotFound>
      <Route element={<PublicLayout />}>
        <Route path={"/"} element={<Home />} />
        <Route path="/article/:article_id" element={<ArticleById />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/profile"} element={<Profile />} />
      </Route>
    </RoutesWithNotFound>
  );
}

export default PublicRoutes;
