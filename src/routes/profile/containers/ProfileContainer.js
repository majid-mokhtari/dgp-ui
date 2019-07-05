import React from "react";
import { Switch, Redirect, Route } from "react-router";
import Home from "../components/home/Home";
import Points from "../components/points/Points";
import Donation from "../components/donation/Donation";
import Comments from "../components/comments/Comments";
import Favorites from "../components/favorites/Favorites";
import Referral from "../components/referral/Referral";
import Account from "../components/account/Account";
import "./ProfileContainer.scss";

const ProfileContainer = props => {
  const { pathname } = props.history.location;
  const pathArr = pathname.split("/");
  const path = pathArr[2];
  return (
    <div className="member-container">
      <ul className="member-side-menu">
        <li
          className={`${path === "discover" ? "active" : ""}`}
          onClick={() => props.history.push("/app/member/home")}
        >
          Home
        </li>
        <li
          className={`${path === "donate" ? "active" : ""}`}
          onClick={() => props.history.push("/app/member/points")}
        >
          Points
        </li>
        <li
          className={`${path === "donate" ? "active" : ""}`}
          onClick={() => props.history.push("/app/member/donation")}
        >
          Donation
        </li>
        <li
          className={`${path === "donate" ? "active" : ""}`}
          onClick={() => props.history.push("/app/member/comments")}
        >
          Comments
        </li>
        <li
          className={`${path === "donate" ? "active" : ""}`}
          onClick={() => props.history.push("/app/member/favorites")}
        >
          Favorites
        </li>
        <li
          className={`${path === "donate" ? "active" : ""}`}
          onClick={() => props.history.push("/app/member/referral")}
        >
          Referral
        </li>
        <li
          className={`${path === "donate" ? "active" : ""}`}
          onClick={() => props.history.push("/app/member/Account")}
        >
          Account
        </li>
      </ul>

      <Switch>
        <Redirect exact from="/app/member" to="/app/member/home" />
        <Route path="/app/member/home" render={() => <Home />} />
        <Route path="/app/member/points" render={() => <Points />} />
        <Route path="/app/member/donation" render={() => <Donation />} />
        <Route path="/app/member/comments" render={() => <Comments />} />
        <Route path="/app/member/favorites" render={() => <Favorites />} />
        <Route path="/app/member/referral" render={() => <Referral />} />
        <Route path="/app/member/account" render={() => <Account />} />
      </Switch>
    </div>
  );
};

export default ProfileContainer;
