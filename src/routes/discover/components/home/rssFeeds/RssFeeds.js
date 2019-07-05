import React from "react";
import RssCard from "./RssCard";
import { Empty } from "antd";
import styled from "styled-components";

const StyledContainer = styled.div`
  background: #fff;
  margin-top: 10px;
  padding: 50px;
`;
const StyledCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function RssFeeds(props) {
  const { rssFeeds } = props;

  const filteredList = rssFeeds.filter(function(card) {
    if (props.filters[0] === "all") {
      return rssFeeds;
    }
    return props.filters.indexOf(card.tag) !== -1;
  });

  const rssCards = filteredList.length ? (
    filteredList.map((data, i) => {
      return <RssCard {...props} key={i} data={data} />;
    })
  ) : (
    <Empty description="No RSS feeds found" />
  );

  return (
    <StyledContainer>
      <h2>WHAT'S NEW</h2>
      <StyledCardsContainer>{rssCards}</StyledCardsContainer>
    </StyledContainer>
  );
}
