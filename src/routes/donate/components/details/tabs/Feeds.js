import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 30px;
`;
const StyledNewFeedsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 20px;
`;
const StyledTrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledFeed = styled.div`
  padding: 10px 0 15px 0;
`;
const StyledTitle = styled.h3``;
const StyledDescription = styled.p``;
const StyledUrl = styled.a``;

export default function Feeds(props) {
  const { rssFeeds, trendingFeeds } = props;
  return (
    <StyledContainer>
      <StyledNewFeedsContainer>
        <h2>What's New</h2>
        {rssFeeds &&
          rssFeeds.map((feed, i) => {
            return (
              <StyledFeed key={i}>
                <StyledTitle>{feed.title}</StyledTitle>
                <StyledDescription>{feed.description}</StyledDescription>
                <StyledUrl href={feed.linkURL} target="_blank">
                  {feed.source}
                </StyledUrl>
              </StyledFeed>
            );
          })}
      </StyledNewFeedsContainer>
      <StyledTrendingContainer>
        <h2>Trending</h2>
        {trendingFeeds &&
          trendingFeeds.map((feed, i) => {
            return (
              <StyledFeed key={i}>
                <StyledTitle>{feed.title}</StyledTitle>
                <StyledDescription>{feed.description}</StyledDescription>
                <StyledUrl href={feed.linkURL} target="_blank">
                  {feed.source}
                </StyledUrl>
              </StyledFeed>
            );
          })}
      </StyledTrendingContainer>
    </StyledContainer>
  );
}
