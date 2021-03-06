import React, { useRef } from "react";
import { Input } from "antd";
import "./subscribe.scss";

const Search = Input.Search;

export default function Subscribe(props) {
  return (
    <div ref={props.isInViewRef} className="subscribe">
      <h1>Get Updates & Get Involved</h1>
      <h3>Sign up to recieve our weekly News</h3>
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
