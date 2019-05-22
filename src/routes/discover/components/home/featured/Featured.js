import React from "react";
import FeaturedDescription from "./FeaturedDescription";
import FeaturedMedia from "./FeaturedMedia";
import "./featured.scss";

export default function Featured(props) {
  function onFeaturedClick() {
    props.history.push("/app/discover/details/1");
  }
  return (
    <div className="featured-container" onClick={onFeaturedClick}>
      <div className="featured-content">
        <FeaturedMedia />
        <FeaturedDescription />
      </div>
    </div>
  );
}
