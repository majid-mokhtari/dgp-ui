import React from "react";
import "./footer.scss";
import { Icon, Input } from "antd";
import logo from "./logo-icon@2x.png";
import { Link } from "react-router-dom";

const Search = Input.Search;
export default function Footer() {
  return (
    <div className="app-footer">
      <img className="logo" src={logo} alt="Logo" />
      <div className="explore">
        <span className="title">Explore</span>
        <div className="footer-links">
          <div className="left">
            <Link to="/app/discover">Discover</Link>
            <Link to="/app/donate">Donate</Link>
            <Link to="/app/about/us">About Us</Link>
            <Link to="/app/about/how">How is Works</Link>
          </div>
          <div className="right">
            <Link to="/app/contact">Contact</Link>
            <Link to="/app/Privacy">Privacy</Link>
            <Link to="/app/about">About Us</Link>
            <Link to="/app/terms">Terms</Link>
          </div>
        </div>
      </div>
      <div className="connect-with-us">
        <span className="title">Connect with Us</span>
        <div className="footer-links">
          <div className="left">
            <a href="/app/discover">
              <Icon className="icon" type="facebook" />
            </a>
            <a href="/app/donate">
              <Icon className="icon" type="twitter" />
            </a>
          </div>
          <div className="right">
            <a href="/app/contact">
              <Icon className="icon" type="instagram" />
            </a>
            <a href="/app/Privacy">
              <Icon className="icon" type="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="get-updates">
        <span className="title">Get Updated and Get Involved</span>
        <Search
          placeholder="Email Address"
          enterButton="SUBSCRIBE"
          size="large"
          onSearch={value => console.log(value)}
          className="subscribe-footer"
        />
      </div>
    </div>
  );
}
