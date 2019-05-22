import React, { useState } from "react";
import { Icon } from "antd";
import "./likeButton.scss";

export default function LikeButton(props) {
  const { border } = props;
  const [liked, setliked] = useState(false);
  let className = `like-btn ${border ? "border" : ""} ${liked ? "liked" : ""}`;
  return (
    <span onClick={() => setliked(!liked)} className={className}>
      {liked ? (
        <Icon type="heart" theme="filled" />
      ) : (
        <Icon type="heart" theme="twoTone" twoToneColor="#ff6363" />
      )}
      {liked ? " Liked" : " Like"}
    </span>
  );
}
