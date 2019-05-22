import React from "react";
import { Switch, Route, Redirect } from "react-router";
import App from "./app";
import Auth from "./auth";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/app" />
      <Route path="/auth" component={Auth} />
      <Route path="/app" component={App} />
    </Switch>
  );
};
export default Routes;
