import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import Filters from "../../../app/components/filters/Filters";
import Featured from "./featured/Featured";
import Charities from "./charities/Charities";
import RssFeeds from "./rssFeeds/RssFeeds";
import Subscribe from "../../../../components/subscribe/Subscribe";
import styled from "styled-components";
import TrendingFeeds from "./rssFeeds/TrendingFeeds";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;
const StyledHeader = styled.div`
  width: 100%;
`;
const StyledChildren = styled.div`
  width: 100%;
`;

const Home = props => {
  const [stickyClassName, setStickyClassName] = useState(
    window.pageYOffset >= 4 ? "sticky" : ""
  );

  const getFilter = () => (
    <div className={`discover-filter ${stickyClassName}`}>
      <Filters {...props} />
    </div>
  );

  const getRssFeeds = () => (
    <div className={`discover-rss-feeds ${stickyClassName}`}>
      <RssFeeds {...props} />
    </div>
  );

  function onScroll() {
    setStickyClassName(window.pageYOffset >= 4 ? "sticky" : "");
  }

  useEffect(() => {
    props.actions.getRssFeeds();
    props.actions.getTrendingRssFeeds();
    props.actions.getFeaturedOfferByPartner(1); //partnerId
    window.scrollTo(0, 0);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <StyledContainer>
      <StyledHeader />
      <StyledChildren>
        <Featured {...props} />
        <Subscribe {...props} />
        {getFilter()}
        {getRssFeeds()}
        <TrendingFeeds {...props} />
        <Charities {...props} />
      </StyledChildren>
    </StyledContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const mapStateToProps = state => {
  const { discover, app } = state;
  return {
    ...discover,
    ...app
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
