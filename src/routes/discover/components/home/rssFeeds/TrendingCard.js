import React from "react";
import { Icon } from "antd";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  background: #fff;
  margin-top: 30px;
  cursor: pointer;
`;
const StyledSummary = styled.div`
  width: 100%;
  padding: 0 50px;
`;

const StyledImg = styled.img`
  width: 120px;
  height: 120px;
`;
const StyledIcon = styled.span`
  margin-right: 10px;
`;
const StyledDescription = styled.p`
  max-width: 60%;
  text-overflow: ellipsis;
  min-height: 60px;
`;

export default function TrendingCard({ data, categories }) {
  const category = categories.find(c => c.categoryID === data.categoryID);
  return (
    <StyledContainer onClick={() => window.open(data.linkURL)}>
      <StyledImg
        src={data.imageURL}
        className="rss-card-img"
        alt="rss-card-img"
      />
      <StyledSummary>
        <StyledIcon>
          <Icon type="tag" />
        </StyledIcon>
        {category && category.description}
        <h2>{data.title}</h2>
        <StyledDescription>{data.description}</StyledDescription>
        <span>{data.date}</span>
      </StyledSummary>
    </StyledContainer>
  );
}
