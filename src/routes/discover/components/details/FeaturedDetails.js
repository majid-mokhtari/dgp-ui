import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import YouTube from "../../../../components/youTube/YouTube";
import "./featuredDetails.scss";
import FacebookButton from "../../../../components/facebookButton/FacebookButton";
import TwitterButton from "../../../../components/twitterButton/TwitterButton";
import CommentButton from "../../../../components/commentButton/CommentButton";

function FeaturedDetails(props) {
  const { featuredDetails } = props;
  const { id } = props.match.params;

  useEffect(() => {
    props.actions.getFeaturedDetails(id);
  }, []);

  if (!featuredDetails) return null;

  return (
    <div className="featured-details-container">
      <div className="featured-details-content">
        <h1>{featuredDetails.header}</h1>
        <h3>{featuredDetails.title}</h3>
        <YouTube
          video={featuredDetails.mediaUrl}
          width="100%"
          height="500"
          autoplay="0"
          rel="0"
          modest="1"
        />
        <p>{featuredDetails.p}</p>
        <div className="featured-details-socials">
          <FacebookButton {...props} />
          <TwitterButton {...props} />
          <CommentButton {...props} />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const mapStateToProps = state => {
  const { discover } = state;
  return {
    ...discover
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedDetails);
