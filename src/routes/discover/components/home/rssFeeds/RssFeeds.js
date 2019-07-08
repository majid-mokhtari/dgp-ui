import React from "react";
import RssCard from "./RssCard";
import { Empty } from "antd";
import styled from "styled-components";

const StyledContainer = styled.div`
  background: #fff;
  margin-top: 10px;
`;
const StyledCardsContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 30px;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;
const StyledHeader = styled.h2`
  color: #00c6c0;
  font-size: 24px;
  font-weight: normal;
  padding-bottom: 30px;
  position: absolute;
`;

export default function RssFeeds(props) {
  const { rssFeeds } = props;
  const filteredList = rssFeeds.filter(function(card) {
    if (props.filters[0] === "all") {
      return rssFeeds;
    }
    return props.filters.indexOf(card.categoryID) !== -1;
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
      <StyledCardsContainer>
        <StyledHeader>WHAT'S NEW</StyledHeader>
        {rssCards}
      </StyledCardsContainer>
    </StyledContainer>
  );
}
