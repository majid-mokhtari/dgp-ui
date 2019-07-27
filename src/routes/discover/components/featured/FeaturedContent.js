import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import YouTube from "../../../../components/youTube/YouTube";
import styled from "styled-components";
import { Icon } from "antd";
import * as util from "../../../../lib/util";
import LikeButton from "../../../../components/likeButton/LikeButton";
import CommentForm from "./CommentForm";
import ShareSection from "./ShareSection";
import CharityCard from "../../../donate/components/home/charities/CharityCard";
import TopComments from "./TopComments";

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
const StyledSocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const StyledSocoalActionBtns = styled.div``;

const StyledCharity = styled.div`
  border-bottom: 1px solid #bcbcbc;
  margin-bottom: 60px;
  padding-bottom: 70px;
`;

const StyledPartnerHeader = styled.h1`
  text-align: center;
`;

const StyledPartnerDescription = styled.h2`
  font-size: 20px;
  color: #00c6c0;
  margin-bottom: 30px;
  text-align: center;
`;

function FeaturedDetails(props) {
  const { featuredOffer, featuredPartner, commentsByOffer } = props;
  const { id } = props.match.params;
  useEffect(() => {
    props.actions.getFeaturedOffer(parseInt(id));
    props.actions.getFeaturedPartner(id);
    props.actions.getCommentsByOffer(id);
  }, []);

  if (!featuredOffer || !featuredPartner || !commentsByOffer) return null;
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
        <StyledSocialContainer>
          {`${util.intToString(featuredOffer.likeCount)} Likes`}
          <StyledSocoalActionBtns>
            <i className="fa fa-bookmark" /> Collect
            <LikeButton {...props} />
          </StyledSocoalActionBtns>
        </StyledSocialContainer>
        <CommentForm {...props} />
        <ShareSection {...props} />
        <StyledCharity>
          <StyledPartnerHeader>
            Donate to the Cause that you support
          </StyledPartnerHeader>
          <StyledPartnerDescription>
            Earn 10 Points/Dollar Donated
          </StyledPartnerDescription>
          <CharityCard data={featuredPartner} {...props} />
        </StyledCharity>
        <TopComments {...props} comments={commentsByOffer} />
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
