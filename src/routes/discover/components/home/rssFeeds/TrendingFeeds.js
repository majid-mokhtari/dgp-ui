import React from "react";
import styled from "styled-components";
import TrendingCard from "./TrendingCard";
import { Empty } from "antd";

const StyledContainer = styled.div`
  background-color: #fff;
`;
const StyledCardsContainer = styled.div`
  width: 80%;
  margin: auto;
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
        <h2>WHAT'S NEW</h2>
        {trendingCards}
      </StyledCardsContainer>
    </StyledContainer>
  );
}
