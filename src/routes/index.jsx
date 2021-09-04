import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "react-loaders";
import ErrorBoundary from "../components/errors/ErrorBoundary";
import SEOPage from "../components/SEOPage/SEOPage";
import Home from "../pages/Home";

const SEOHome = () => <SEOPage component={Home} title="Home" />;

const PageNotFound = lazy(() => import("../components/errors/PageNotFound"));

const Routes = () => (
  <Suspense fallback={<Loader type="ball-triangle-path" active />}>
    <Switch>
      <Route path={["/", "/home", "/index"]} component={SEOHome} exact />
      <Route
        path="*"
        render={() => (
          <SEOPage component={PageNotFound} title="Page Not Found" />
        )}
      />
    </Switch>
  </Suspense>
);

export default Routes;
