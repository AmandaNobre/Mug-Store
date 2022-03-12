import React, { Suspense } from "react";
import { Route } from "react-router-dom";

import basepage from "../basepage";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = () => {
  return (
    <Suspense fallback={loading}>
      {basepage.map((base, index) => {
        return (
          base.component && (
            <Route
              key={index}
              path={base.path}
              exact={base.exact}
              render={(props) => <base.component {...props} />}
            />
          )
        );
      })}
    </Suspense>
  );
};

export default TheContent;
