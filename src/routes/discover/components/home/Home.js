import React, { useEffect, useState, useRef } from "react";
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
import { visibleY } from "../../../../lib/util";

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
  const inViewRef = useRef();
  const containerRef = useRef();
  const discoverFilterRef = useRef();

  const getFilter = () => (
    <div className="discover-filter-container">
      <div ref={discoverFilterRef} className="discover-filter">
        <Filters {...props} />
      </div>
    </div>
  );

  const getRssFeeds = () => (
    <div className="discover-rss-feeds">
      <RssFeeds {...props} />
    </div>
  );

  function onScroll() {
    if (discoverFilterRef.current) {
      if (visibleY(inViewRef.current)) {
        discoverFilterRef.current.classList.remove("sticky");
      } else {
        discoverFilterRef.current.classList.add("sticky");
      }
    }
  }

  useEffect(() => {
    props.actions.getRssFeeds();
    props.actions.getTrendingRssFeeds();
    props.actions.getFeaturedOffer();
    window.scrollTo(0, 0);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <StyledContainer>
      <StyledHeader />
      <StyledChildren ref={containerRef}>
        <Featured {...props} />
        <Subscribe {...props} isInViewRef={inViewRef} />
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
