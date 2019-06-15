import React from "react";
import { Switch, Redirect, Route } from "react-router";
import AboutUs from "../components/us";
import HowItWorks from "../components/howItWorks";

function AboutContainer() {
  return (
    <Switch>
      <Redirect exact from="/app/about" to="/app/about/us" />
      <Route path="/app/about/us" component={AboutUs} />
      <Route path="/app/about/how" component={HowItWorks} />
    </Switch>
  );
}

export default AboutContainer;
