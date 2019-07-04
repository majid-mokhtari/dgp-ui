import React from "react";
import { Switch, Redirect, Route } from "react-router";
import Home from "../components/home/Home";
import DonateDetails from "../components/details/DonateDetails";

function DiscoverContainer() {
  return (
    <Switch>
      <Redirect exact from="/app/donate" to="/app/donate/home" />
      <Route path="/app/donate/home" component={() => <Home showFilter />} />
      <Route path="/app/donate/details/:id" component={DonateDetails} />
    </Switch>
  );
}

export default DiscoverContainer;
