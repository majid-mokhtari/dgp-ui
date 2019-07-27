import React from "react";
import { Form, Icon } from "antd";
import styled from "styled-components";
import example from "./ned.png";
import moment from "moment";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  text-align: left;
`;

const StyledHeader = styled.h1``;
const StyledCommentCardsContainer = styled.div``;
const StyledCard = styled.div`
  padding: 20px;
  border: 1px solid #d4d3d3;
  background: #fff;
  margin-bottom: 10px;
`;
const StyledAvatar = styled.img`
  max-width: 80px;
  cursor: pointer;
  border-radius: 50%;
`;
const StyledUserInfo = styled.div`
  display: flex;
`;
const StyledNameAndDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 200px;
  padding-left: 20px;
`;
const StyledName = styled.span``;
const StyledDate = styled.span``;
const StyledComment = styled.p`
  padding: 20px 0;
`;
const StyledSocialContainer = styled.div``;
const StyledLikesNumbers = styled.span`
  margin-right: 20px;
  i {
    margin-right: 5px;
  }
`;
const StyledCommentNumbers = styled.span`
  i {
    margin-right: 5px;
  }
`;

const TopComments = props => {
  const { commentsByOffer } = props;
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <StyledContainer>
      <StyledHeader>Top Comments</StyledHeader>
      <StyledCommentCardsContainer>
        {commentsByOffer.map((com, i) => {
          return (
            <StyledCard key={i}>
              <StyledUserInfo>
                <StyledAvatar src={example} alt="user" />
                <StyledNameAndDate>
                  <StyledName>Ian Munthe</StyledName>
                  <StyledDate>
                    {moment.unix(com.created_at).format("MMMM Do YYYY, h:mm")}
                  </StyledDate>
                </StyledNameAndDate>
              </StyledUserInfo>
              <StyledComment>{com.content}</StyledComment>
              <StyledSocialContainer>
                <StyledLikesNumbers>
                  <Icon type="heart" />
                  {com.likeCount} Likes
                </StyledLikesNumbers>
                <StyledCommentNumbers>
                  <Icon type="message" />
                  {com.replyCount} Comments
                </StyledCommentNumbers>
              </StyledSocialContainer>
            </StyledCard>
          );
        })}
      </StyledCommentCardsContainer>
    </StyledContainer>
  );
};

export default Form.create()(TopComments);
