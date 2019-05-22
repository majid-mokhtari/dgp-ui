import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import Filters from "./filters/Filters";
import Charities from "./charities/Charities";
import Subscribe from "../../../../components/subscribe/Subscribe";
import "./home.scss";

function Home(props) {
  useEffect(() => {}, []);
  return (
    <div className="donate-home">
      <div className="donate-header">
        <Filters {...props} />
      </div>
      <div className="donate-children">
        <Charities {...props} />
        <Subscribe {...props} />
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
  const { donate } = state;
  return {
    ...donate
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
