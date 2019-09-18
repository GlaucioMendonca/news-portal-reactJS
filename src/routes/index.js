import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../views/App";
import AllRoutes from "./routes";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {AllRoutes.map((route, i) => {
        if (route.type === "public") {
          return (
            <Route
              key={i}
              path={route.path}
              exact={true}
              component={() => <App content={route.component} />}
            />
          );
        }
        return <Route path="*" component={() => <h1> 404 not found </h1>} />;
      })}
    </Switch>
  </BrowserRouter>
);

export default Routes;
