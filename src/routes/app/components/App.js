import React from "react";
import { Switch, Redirect, Route } from "react-router";
import Header from "./header/Header";
import Discover from "../../discover";
import Donate from "../../donate";
import About from "../../about";
import NotFound from "../../exceptions/NotFound";
import Footer from "./footer/Footer";
import { BackTop } from "antd";
import "./app.scss";

export default function App(props) {
  const { history, actions, isLoggedIn, avatarUrl } = props;
  return (
    <div className="app-container">
      <Header
        history={history}
        logoutUser={actions.logoutUser}
        isLoggedIn={isLoggedIn}
        avatarUrl={avatarUrl}
        {...props}
      />
      <div className="app-children">
        <Switch>
          <Redirect exact from="/app" to="/app/discover" />
          <Route path="/app/discover" component={Discover} />
          <Route path="/app/donate" component={Donate} />
          <Route path="/app/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <BackTop />
      <Footer />
    </div>
  );
}
