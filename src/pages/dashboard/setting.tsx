import { lazy } from "react";

const LazyFormLocalStorage = lazy(() => import("@/components/Dashboard/Setting/formLocalStorage"));
const LazyFormPersonalization = lazy(() => import("@/components/Dashboard/Setting/formPersonalization"));

const MySetting = () => {
  return (
    <article style={{ width: "100%" }}>
      <h3>My Settings</h3>

      <LazyFormLocalStorage />

      <LazyFormPersonalization />
    </article>
  );
};

export default MySetting;
