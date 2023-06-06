import RoutesWithNotFound from "@/utilities/RoutesWithNotFound.utility";
import { Route } from "react-router-dom";
import { lazy } from "react";

const LazyPrivateLayout = lazy(() => import("@/components/Layouts/Private"));
const LazyMyProfile = lazy(() => import("@/pages/dashboard/profile"));
const LazyArticleList = lazy(() => import("@/pages/dashboard/article/list"));
const LazyArticleCreate = lazy(() => import("@/pages/dashboard/article/create"));
const LazyEditArticleById = lazy(() => import("@/pages/dashboard/article/[article_id]/edit"));
const LazyMySetting = lazy(() => import("@/pages/dashboard/setting"));

const PrivateRoutes = () => {
  return (
    <RoutesWithNotFound>
      <Route element={<LazyPrivateLayout />}>
        <Route path="/" element={<LazyMyProfile />} />
        <Route path={"articles/list"} element={<LazyArticleList />} />
        <Route path={"articles/create"} element={<LazyArticleCreate />} />
        <Route path="articles/:article_id/edit" element={<LazyEditArticleById />} />
        <Route path="settings" element={<LazyMySetting />} />
      </Route>
    </RoutesWithNotFound>
  );
};

export default PrivateRoutes;
