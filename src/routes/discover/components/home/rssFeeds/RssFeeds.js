import React from "react";
import RssCard from "./RssCard";
import example from "./direwolf.png";
import { Empty } from "antd";
import "./rssFeeds.scss";

const tags = [
  "environment",
  "animals",
  "health",
  "humanitarian",
  "human services"
];

const listData = [];
for (let i = 0; i < 4; i++) {
  const randomTagNum = Math.floor(Math.random() * tags.length);
  listData.push({
    image: example,
    tag: tags[randomTagNum],
    title: `ant design part ${i}`,
    summary: "We supply a series of design principles, practical patterns",
    date: "Mar 28",
    href: "https://support.bestfriends.org"
  });
}

export default function RssFeeds(props) {
  const filteredList = listData.filter(function(card) {
    if (props.filters[0] === "all") {
      return listData;
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
