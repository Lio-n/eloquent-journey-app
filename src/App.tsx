import "@picocss/pico";
import "./App.css";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import RoutesWithNotFound from "./utilities/RoutesWithNotFound.utility";
import PrivateRoutes from "./routes/private.routes";
import { PrivatePaths } from "./routes/path.routes";
import PublicRoutes from "./routes/public.routes";
import AuthGuard from "./guards/auth.guard";
import store from "./lib/redux/store";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route element={<ToggleTheme />}>
                <Route path={`/*`} element={<PublicRoutes />} />

                <Route element={<AuthGuard />}>
                  <Route path={`${PrivatePaths.DASHBOARD}/*`} element={<PrivateRoutes />} />
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
