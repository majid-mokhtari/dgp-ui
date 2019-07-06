import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import Filters from "../../../app/components/filters/Filters";
import Charities from "./charities/Charities";
import "./home.scss";

function Home(props) {
  const { showFilter } = props;

  const getFilter = () => (
    <div className="donate-header">
      <Filters {...props} />
    </div>
  );

  useEffect(() => {
    props.actions.getDonationPartners();
  }, []);
  return (
    <div className="donate-home">
      {showFilter && getFilter()}
      <div className="donate-children">
        <Charities {...props} />
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
  const { donate, app } = state;
  return {
    ...donate,
    ...app
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
