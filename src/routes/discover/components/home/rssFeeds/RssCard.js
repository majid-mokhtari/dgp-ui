import React from "react";
import { Icon } from "antd";

export default function RssCard({ data, categories }) {
  const category = categories.find(c => c.categoryID === data.categoryID);
  return (
    <div className="rss-card">
      <div className="rss-card-detail">
        <span>
          <Icon type="tag" />
          {category && category.descriptino}
        </span>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <span>{data.date}</span>
      </div>
      <img src={data.imageURL} className="rss-card-img" alt="rss-card-img" />
    </div>
  );
}
