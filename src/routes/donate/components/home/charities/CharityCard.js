import React from "react";
import { Icon } from "antd";
import * as util from "../../../../../lib/util";
import styled from "styled-components";
import LikeIcon from "../../../../../components/likeIcon/LikeIcon";

const StyledCardContainer = styled.div`
  display: flex;
  background-color: #fff;
  margin-bottom: 10px;
  transition: box-shadow 0.5s;
  cursor: pointer;
  max-height: 322px;
  &:hover {
    box-shadow: 4px 5px 9px 0px #888888;
  }
`;
const StyledImg = styled.img`
  width: 50%;
`;
const StyledSummary = styled.div`
  width: 50%;
  padding: 20px 0 0 68px;
`;
const StyledLogo = styled.img`
  height: 70px;
  margin-bottom: 20px;
`;
const StyledTitle = styled.h2``;
const StyledDescription = styled.div`
  min-height: 68px;
`;
const StyledTagsContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
  justify-content: left;
`;
const StyledTag = styled.div`
  margin-left: 10px;
`;
const StyledTagIcon = styled.i`
  margin-right: 10px;
  margin-bottom: 20px;
`;
const StyledLikesContainer = styled.div``;

export default function CharityCard(props) {
  const { data, history } = props;
  const images = JSON.parse(data.creative);

  function onCardClick(event) {
    const { target } = event;
    const classList = ".like-btn";
    if (target.classList.length && !target.matches(classList)) {
      history.push(`/app/donate/details/${data.id}`);
    }
  }
  return (
    <StyledCardContainer onClick={onCardClick}>
      <StyledImg src={images["600x400"][0]} alt="charity-img" />
      <StyledSummary>
        <StyledLogo src={data.logoURL} alt="charity-logo" />
        <StyledTitle>{data.short_desc}</StyledTitle>
        <StyledDescription>{data.long_desc}</StyledDescription>
        <StyledTagsContainer>
          {data.categories.map((tag, i) => {
            return (
              <StyledTag key={i}>
                <StyledTagIcon>
                  <Icon type="tag" />
                </StyledTagIcon>
                {tag}
              </StyledTag>
            );
          })}
        </StyledTagsContainer>
        <StyledLikesContainer>
          {`${util.intToString(data.likeCount)} Likes`}
        </StyledLikesContainer>
      </StyledSummary>
      <LikeIcon {...props} />
    </StyledCardContainer>
  );
}
