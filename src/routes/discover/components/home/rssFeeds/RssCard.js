import React from "react";
import { Icon } from "antd";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 49%;
  background-color: #fff;
  margin-bottom: 25px;
  display: flex;
`;
const StyledCard = styled.div`
  width: 60%;
  padding: 20px 0 20px 0;
`;
const StyledImg = styled.img`
  width: 40%;
  height: 200px;
`;
const StyledIcon = styled.span`
  margin-right: 10px;
`;
const StyledDescription = styled.p`
  max-width: 80%;
  text-overflow: ellipsis;
  min-height: 60px;
`;

export default function RssCard({ data, categories }) {
  const category = categories.find(c => c.categoryID === data.categoryID);
  return (
    <StyledContainer>
      <StyledCard>
        <span>
          <StyledIcon>
            <Icon type="tag" />
          </StyledIcon>
          {category && category.description}
        </span>
        <h2>{data.title}</h2>
        <StyledDescription>{data.description}</StyledDescription>
        <span>{data.date}</span>
      </StyledCard>
      <StyledImg
        src={data.imageURL}
        className="rss-card-img"
        alt="rss-card-img"
      />
    </StyledContainer>
  );
}
