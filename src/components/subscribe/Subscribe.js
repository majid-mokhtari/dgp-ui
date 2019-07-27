import React from "react";
import { Input } from "antd";
import "./subscribe.scss";

const Search = Input.Search;

export default function Subscribe(props) {
  return (
    <div className="subscribe">
      <h1>Connect with us!</h1>
      <h3>Get updates and learn about ways to do good.</h3>
      <Search
        placeholder="Email Address"
        enterButton="SUBSCRIBE"
        size="large"
        onSearch={value => props.actions.subscribe(value)}
        className="subscribe-input"
      />
    </div>
  );
}
