import React from "react";
import { Icon } from "antd";
import "./commentButton.scss";

export default function CommentButton() {
  return (
    <a
      className="comment-btn"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.redcross.org/donate/donation.html/"
    >
      <Icon type="message" /> +5 Points
    </a>
  );
}
