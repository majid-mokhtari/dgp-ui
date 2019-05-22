import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="app-footer">
      <ul className="footer-nav">
        <li>Help</li>
        <li>Privacy</li>
        <li>Terms</li>
      </ul>
      <div>Copyright &copy; {new Date().getFullYear()} Do Good Points</div>
    </div>
  );
}
