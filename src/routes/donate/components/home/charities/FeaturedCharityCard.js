import React from "react";
import LikeButton from "../../../../../components/likeButton/LikeButton";
import FacebookButton from "../../../../../components/facebookButton/FacebookButton";
import TwitterButton from "../../../../../components/twitterButton/TwitterButton";

export default function FeaturedCharityCard(props) {
  const { data, history } = props;
  function onCardClick(event) {
    const { target } = event;
    const classList = ".like-btn";
    if (!target.matches(classList)) {
      history.push(`/app/donate/details/${data.id}`);
    }
  }
  return (
    <div className="featured-charity-card" onClick={onCardClick}>
      <div className="featured-charity-content">
        <img
          src={data.logo}
          className="featured-charity-logo"
          alt="charity-logo"
        />
        <div className="featured-charity-title">
          <h2>{data.title}</h2>
        </div>
        <div className="featured-charity-summary">{data.summary}</div>
        <div className="featured-charity-socials">
          <FacebookButton {...props} />
          <TwitterButton {...props} />
          <LikeButton {...props} border />
        </div>
      </div>
      <img
        src={data.image}
        className="featured-charity-img"
        alt="charity-img"
      />
    </div>
  );
}
