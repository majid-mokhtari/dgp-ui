import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import Comments from "./Comments.js";

const CommentsMember = props => {
  return (
    <div className="how-it-works-container">
      <Comments {...props} />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const mapStateToProps = state => {
  const { about } = state;
  return {
    ...about
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsMember);
