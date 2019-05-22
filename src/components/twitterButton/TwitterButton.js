import React from "react";
import { Icon } from "antd";
import "./twitterButton.scss";

export default function TwitterButton() {
  return (
    <a
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      className="twitter-share-button"
      data-size="large"
      data-show-count="false"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon type="twitter" />
      <span>+5 Points</span>
    </a>
  );
}
