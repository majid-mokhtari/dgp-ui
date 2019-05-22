import React from "react";
import { Switch, Redirect, Route } from "react-router";
import Home from "../components/home/Home";
import FeaturedDetails from "../components/details/FeaturedDetails";

function DiscoverContainer() {
  return (
    <Switch>
      <Redirect exact from="/app/discover" to="/app/discover/home" />
      <Route path="/app/discover/home" component={Home} />
      <Route path="/app/discover/details/:id" component={FeaturedDetails} />
    </Switch>
  );
}

export default DiscoverContainer;
