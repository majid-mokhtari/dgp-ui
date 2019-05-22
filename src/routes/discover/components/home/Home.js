import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import Filters from "./filters/Filters";
import Featured from "./featured/Featured";
import Charities from "./charities/Charities";
import RssFeeds from "./rssFeeds/RssFeeds";
import Subscribe from "../../../../components/subscribe/Subscribe";
import "./home.scss";

function home(props) {
  return (
    <div className="discover-home">
      <div className="discover-header">
        <Filters {...props} />
      </div>
      <div className="discover-children">
        <Featured {...props} />
        <Subscribe {...props} />
        <RssFeeds {...props} />
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
  const { discover } = state;
  return {
    ...discover
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(home);
