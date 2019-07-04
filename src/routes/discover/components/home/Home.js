import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import Filters from "./filters/Filters";
import Featured from "./featured/Featured";
import Charities from "./charities/Charities";
import RssFeeds from "./rssFeeds/RssFeeds";
import Subscribe from "../../../../components/subscribe/Subscribe";
import styled from "styled-components";

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
  padding: 20px;
`;

function home(props) {
  return (
    <StyledContainer>
      <StyledHeader>
        <Filters {...props} />
      </StyledHeader>
      <StyledChildren>
        <Featured {...props} />
        <Subscribe {...props} />
        <RssFeeds {...props} />
        <Charities {...props} />
      </StyledChildren>
    </StyledContainer>
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
