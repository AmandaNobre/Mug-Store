import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheLayout = React.lazy(() => import("../containers/TheLayout"));

const Router = () => {
  const RoutesFilter = () => {
    return <Route path="/" component={TheLayout} />;
  };

  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <RoutesFilter />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default Router;
