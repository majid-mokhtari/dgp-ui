import React, { useEffect } from "react";
import RssCard from "./RssCard";
import { Empty } from "antd";
import "./rssFeeds.scss";

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
    <div className="rss-feeds">
      <h2>WHAT'S NEW</h2>
      <div className="rss-cards-container">{rssCards}</div>
    </div>
  );
}
