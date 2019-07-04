import React from "react";
import { Switch, Redirect, Route } from "react-router";
import Home from "../components/home/Home";
import Points from "../components/points/Points";
import Donation from "../components/donation/Donation";
import Comments from "../components/comments/Comments";
import Favorites from "../components/favorites/Favorites";
import Referral from "../components/referral/Referral";
import Account from "../components/account/Account";

function ProfileContainer() {
  return (
    <Switch>
      <Redirect exact from="/app/member" to="/app/about/home" />
      <Route path="/app/member/home" component={Home} />
      <Route path="/app/member/points" component={Points} />
      <Route path="/app/member/donation" component={Donation} />
      <Route path="/app/member/comments" component={Comments} />
      <Route path="/app/member/favorites" component={Favorites} />
      <Route path="/app/member/referral" component={Referral} />
      <Route path="/app/member/account" component={Account} />
    </Switch>
  );
}

export default ProfileContainer;
