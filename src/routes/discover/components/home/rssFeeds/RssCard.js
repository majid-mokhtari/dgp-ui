import React from "react";
import { Icon } from "antd";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 47%;
  min-width: 400px;
  background-color: #fff;
  display: flex;
  border-bottom: solid 2px #d8d8d8;
  padding: 70px 0;
  cursor: pointer;
  @media only screen and (max-width: 1142px) {
    max-width: 97%;
  }
`;
const StyledSummary = styled.div`
  width: 500px;
`;
const StyledImg = styled.img`
  width: 200px;
  height: auto;
`;
const StyledIcon = styled.span`
  margin-right: 10px;
`;
const StyledDescription = styled.p`
  max-width: 80%;
  text-overflow: ellipsis;
  min-height: 60px;
`;
const StyledTagContainer = styled.div`
  margin-bottom: 10px;
`;
const StyledTitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
`;

export default function RssCard({ data, categories }) {
  const category = categories.find(c => c.categoryID === data.categoryID);
  return (
    <StyledContainer onClick={() => window.open(data.linkURL)}>
      <StyledSummary>
        <StyledTagContainer>
          <StyledIcon>
            <Icon type="tag" />
          </StyledIcon>
          {category && category.description}
        </StyledTagContainer>
        <StyledTitle>{data.title}</StyledTitle>
        <StyledDescription>{data.description}</StyledDescription>
        <span>{data.date}</span>
      </StyledSummary>
      <StyledImg
        src={data.imageURL}
        className="rss-card-img"
        alt="rss-card-img"
      />
    </StyledContainer>
  );
}
