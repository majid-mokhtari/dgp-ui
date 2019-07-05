import React from "react";
import "./Account.scss";
import { Card, Button } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import ChangeEmail from "./forms/ChangeEmail";

function Account(props) {
  return (
    <div>
      Account
      <ChangeEmail {...props} />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const mapStateToProps = state => {
  const { member } = state;
  return {
    ...member
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
