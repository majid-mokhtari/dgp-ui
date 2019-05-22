import React from "react";
import "./facebookButton.scss";

export default function FacebookButton(props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.facebook.com/sharer/sharer.php?u=https://ant.design/docs/react/introduce"
      className="fb-xfbml-parse-ignore"
    >
      <span className="fb-button-text">
        <i className="fa fa-facebook-f" />
        +5 Points
      </span>
    </a>
  );
}
