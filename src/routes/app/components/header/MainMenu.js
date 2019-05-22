import React from "react";
import { Icon } from "antd";

export default function MainMenu(props) {
  const { pathname } = props.history.location;
  const pathArr = pathname.split("/");
  const path = pathArr[2];
  return (
    <div>
      <div className="header-menu-dropdown">
        <Icon type="menu-fold" />
      </div>
      <ul className="header-menu">
        <li
          className={`${path === "discover" ? "active" : ""}`}
          onClick={() => props.history.push("/app/discover")}
        >
          Discover
        </li>
        <li
          className={`${path === "donate" ? "active" : ""}`}
          onClick={() => props.history.push("/app/donate")}
        >
          Donate
        </li>
        <li
          className={`${path === "about" ? "active" : ""}`}
          onClick={() => props.history.push("/app/about")}
        >
          How it works
        </li>
      </ul>
    </div>
  );
}
