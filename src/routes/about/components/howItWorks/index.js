import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import How from "./How.js";

const HowItWorks = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="how-it-works-container">
      <How {...props} />
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
)(HowItWorks);
