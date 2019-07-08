import React from "react";
import styled from "styled-components";
import TrendingCard from "./TrendingCard";
import { Empty } from "antd";

const StyledContainer = styled.div`
  background-color: #fff;
  padding: 20px 0;
`;
const StyledCardsContainer = styled.div`
  width: 80%;
  margin: auto;
`;
const StyledTitle = styled.h2`
  color: #00c6c0;
  font-size: 24px;
  font-weight: normal;
`;

export default function TrendingFeeds(props) {
  const { trendingFeeds, filters } = props;

  const filteredList = trendingFeeds.filter(function(card) {
    if (filters[0] === "all") {
      return trendingFeeds;
    }
    return filters.indexOf(card.tag) !== -1;
  });

  const trendingCards = filteredList.length ? (
    filteredList.map((data, i) => {
      return <TrendingCard {...props} key={i} data={data} />;
    })
  ) : (
    <Empty description="No RSS feeds found" />
  );

  return (
    <StyledContainer>
      <StyledCardsContainer>
        <StyledTitle>TRENDING</StyledTitle>
        {trendingCards}
      </StyledCardsContainer>
    </StyledContainer>
  );
}
