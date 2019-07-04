import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import Donation from "./Donation.js";

const DonationMember = props => {
  return (
    <div className="how-it-works-container">
      <Donation {...props} />
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
)(DonationMember);
