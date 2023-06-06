import RoutesWithNotFound from "@/utilities/RoutesWithNotFound.utility";
import { Route } from "react-router-dom";
import { lazy } from "react";

const LazyPublicLayout = lazy(() => import("@/components/Layouts/Public"));
const LazyHome = lazy(() => import("@/pages"));
const LazyArticleById = lazy(() => import("@/pages/article/[article_id]"));
const LazyLogin = lazy(() => import("@/pages/login"));
const LazyProfile = lazy(() => import("@/pages/profile"));

function PublicRoutes() {
  return (
    <RoutesWithNotFound>
      <Route element={<LazyPublicLayout />}>
        <Route path={"/"} element={<LazyHome />} />
        <Route path="/article/:article_id" element={<LazyArticleById />} />
        <Route path={"/login"} element={<LazyLogin />} />
        <Route path={"/profile"} element={<LazyProfile />} />
      </Route>
    </RoutesWithNotFound>
  );
}

export default PublicRoutes;
