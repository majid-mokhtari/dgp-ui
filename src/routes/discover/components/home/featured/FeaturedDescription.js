import React from "react";
import FacebookButton from "../../../../../components/facebookButton/FacebookButton";
import TwitterButton from "../../../../../components/twitterButton/TwitterButton";
import CommentButton from "../../../../../components/commentButton/CommentButton";

export default function FeaturedDescription(props) {
  return (
    <div className="featured-description">
      <h2 className="featured-header">
        60 More Measles Cases in a Weed - What You Need to Know
      </h2>
      <span className="featured-author">Owen Williams in Red Cross</span>
      <p className="featured-summary">
        The American Red Cross has been involved in a worldwide battle against
        measles for years and continues its global right against the disease
      </p>
      <div className="featured-socials">
        <FacebookButton {...props} />
        <TwitterButton {...props} />
        <CommentButton {...props} />
      </div>
    </div>
  );
}
