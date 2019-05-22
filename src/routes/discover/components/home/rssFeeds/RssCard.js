import React from "react";
import { Icon } from "antd";

export default function RssCard({ data }) {
  return (
    <div className="rss-card">
      <div className="rss-card-detail">
        <span>
          <Icon type="tag" />
          {data.tag}
        </span>
        <h2>{data.title}</h2>
        <p>{data.summary}</p>
        <span>{data.date}</span>
        <a href={data.href}>{data.href}</a>
      </div>
      <img src={data.image} className="rss-card-img" alt="rss-card-img" />
    </div>
  );
}
