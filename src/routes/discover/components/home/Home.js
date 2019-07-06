import React, { useEffect } from "react";
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
`;
const StyledHeader = styled.div`
  width: 100%;
`;
const StyledChildren = styled.div`
  width: 100%;
`;

const Home = props => {
  useEffect(() => {
    props.actions.getRssFeeds();
    props.actions.getTrendingRssFeeds();
  }, []);
  return (
    <StyledContainer>
      <StyledHeader />
      <StyledChildren>
        <Featured {...props} />
        <Subscribe {...props} />
        <Filters {...props} />
        <RssFeeds {...props} />
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
