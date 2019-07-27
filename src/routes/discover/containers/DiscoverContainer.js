import React from "react";
import { Switch, Redirect, Route } from "react-router";
import Home from "../components/home/Home";
import FeaturedContent from "../components/featured/FeaturedContent";

function DiscoverContainer() {
  return (
    <Switch>
      <Redirect exact from="/app/discover" to="/app/discover/home" />
      <Route path="/app/discover/home" component={Home} />
      <Route
        path="/app/discover/featured/offer/:id"
        component={FeaturedContent}
      />
    </Switch>
  );
}

export default DiscoverContainer;
