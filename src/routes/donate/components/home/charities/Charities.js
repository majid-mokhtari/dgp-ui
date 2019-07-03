import React, { useState, useEffect } from "react";
import { Spin, Empty } from "antd";
import FeaturedCharityCard from "./FeaturedCharityCard";
import CharityCard from "./CharityCard";
import "./charities.scss";

export default function Charities(props) {
  const [count, setCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const { donations } = props;

  function onLoadMore() {
    if (count < donations.length) {
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

  const filteredList = donations.filter(function(d) {
    if (props.filters[0] === "all") {
      return donations;
    }
    return d.categories.some(c => props.filters.indexOf(c) !== -1);
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
