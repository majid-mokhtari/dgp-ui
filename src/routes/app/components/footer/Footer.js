import React from "react";
import "./footer.scss";
import logo from "./logo-icon@2x.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="app-footer">
      <img className="logo" src={logo} alt="Logo" />
      <div className="explore">
        <span>Explore</span>
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
      <div className="conect-with-us">
        <span>Connect with Us</span>
        <div className="footer-links">
          <div className="left">
            <a href="/app/discover">FB</a>
            <a href="/app/donate">Twitter</a>
          </div>
          <div className="right">
            <a href="/app/contact">Snap</a>
            <a href="/app/Privacy">LinkD</a>
          </div>
        </div>
      </div>
      <div className="conect-with-us">
        <span>Get Updated and Get Involved</span>
      </div>
    </div>
  );
}
