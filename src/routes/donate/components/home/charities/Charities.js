import React, { useState, useEffect } from "react";
import { Spin, Empty } from "antd";
import example from "./ned.png";
import logo from "./logo.png";
import FeaturedCharityCard from "./FeaturedCharityCard";
import CharityCard from "./CharityCard";
import "./charities.scss";

const tags = [
  "environment",
  "animals",
  "health",
  "humanitarian",
  "human services"
];

const listData = [];
for (let i = 0; i < 12; i++) {
  const randomTagNum = Math.floor(Math.random() * tags.length);
  listData.push({
    id: i,
    image: example,
    tags: tags[randomTagNum],
    title: `ant design part ${i}`,
    logo: logo,
    summary:
      "We supply a series of design principles, practical patterns and high quality design",
    likes: 1220
  });
}

export default function Charities(props) {
  const [count, setCount] = useState(3);
  const [loading, setLoading] = useState(false);

  function onLoadMore() {
    if (count < listData.length) {
      setLoading(true);
      setTimeout(() => {
        setCount(count + 3);
        setLoading(false);
      }, 500);
    }
  }

  const loadMoreBtn = loading ? (
    <div className="loading-more-btn">
      <Spin size="large" />
    </div>
  ) : null;

  const filteredList = listData.filter(function(card) {
    if (props.filters[0] === "all") {
      return listData;
    }
    return props.filters.indexOf(card.tags) !== -1;
  });

  const cards = filteredList.length ? (
    filteredList.slice(0, count).map((data, i) => {
      return <CharityCard key={i} data={data} {...props} />;
    })
  ) : (
    <Empty description="No Donations Found" />
  );

  function onScroll() {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      onLoadMore();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const featuredCharity = filteredList.length ? (
    <FeaturedCharityCard data={filteredList[0]} {...props} />
  ) : null;

  return (
    <div className="charities-container">
      {featuredCharity}
      <div className="charities-card-container">{cards}</div>
      {loadMoreBtn}
    </div>
  );
}
