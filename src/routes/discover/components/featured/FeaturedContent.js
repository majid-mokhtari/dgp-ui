import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import YouTube from "../../../../components/youTube/YouTube";
import styled from "styled-components";
import { Icon } from "antd";

const StyledContainer = styled.div`
  display: flex;
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 50px auto;
`;
const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: 500;
`;
const StyledSubTitle = styled.h3`
  opacity: 0.5;
`;
const StyledContent = styled.p`
  font-size: 20px;
`;
const StyledMedia = styled.div`
  margin: 20px 0;
`;
const StyledNavIcon = styled.div`
  width: 10%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin: 50px auto;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

function FeaturedDetails(props) {
  const { featuredOffer } = props;
  const { id } = props.match.params;

  useEffect(() => {
    props.actions.getFeaturedOfferByPartner(id);
  }, []);

  if (!featuredOffer) return null;
  return (
    <StyledContainer>
      <StyledNavIcon>
        <Icon type="arrow-left" onClick={() => props.history.push("/app")} />
      </StyledNavIcon>
      <StyledContentContainer>
        <StyledTitle>{featuredOffer.title}</StyledTitle>
        <StyledSubTitle>{featuredOffer.subTitle}</StyledSubTitle>
        <StyledMedia>
          <YouTube
            video={featuredOffer.videoURL}
            width="100%"
            height="500"
            autoplay="0"
            rel="0"
            modest="1"
          />
        </StyledMedia>
        <StyledContent>{featuredOffer.content}</StyledContent>
      </StyledContentContainer>
      <StyledNavIcon>
        <Icon type="close" onClick={() => props.history.push("/app")} />
      </StyledNavIcon>
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
)(FeaturedDetails);
