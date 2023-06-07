import "@picocss/pico";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import RoutesWithNotFound from "./utilities/RoutesWithNotFound.utility";
import { PrivatePaths } from "./routes/path.routes";
import AuthGuard from "./guards/auth.guard";
import store from "./lib/redux/store";
import ToggleTheme from "./components/ToggleTheme";
import LoadingPlaceholder from "./utilities/LoadingPlaceholder.utility";

const LazyPublicRoutes = lazy(() => import("./routes/public.routes"));
const LazyPrivateRoutes = lazy(() => import("./routes/private.routes"));

function App() {
  return (
    <div id="app">
      <Suspense fallback={<LoadingPlaceholder />}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route element={<ToggleTheme />}>
                <Route path={`/*`} element={<LazyPublicRoutes />} />

                <Route element={<AuthGuard />}>
                  <Route path={`${PrivatePaths.DASHBOARD}/*`} element={<LazyPrivateRoutes />} />
                </Route>
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
