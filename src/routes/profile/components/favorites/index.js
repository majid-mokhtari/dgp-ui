import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import Favorites from "./Favorites.js";

const FavoritesMember = props => {
  return (
    <div className="how-it-works-container">
      <Favorites {...props} />
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
)(FavoritesMember);
