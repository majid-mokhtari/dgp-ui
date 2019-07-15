import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import Filters from "../../../app/components/filters/Filters";
import Charities from "./charities/Charities";
import "./home.scss";

function Home(props) {
  const { showFilter } = props;
  const [stickyClassName, setStickyClassName] = useState(
    window.pageYOffset >= 4 ? "sticky" : ""
  );

  const getFilter = () => (
    <div className={`donate-header ${stickyClassName}`}>
      <Filters {...props} />
    </div>
  );

  function onScroll() {
    setStickyClassName(window.pageYOffset >= 4 ? "sticky" : "");
  }

  useEffect(() => {
    props.actions.getDonationPartners();
    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="donate-home">
      {showFilter && getFilter()}
      <div className={`donate-children ${stickyClassName}`}>
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
