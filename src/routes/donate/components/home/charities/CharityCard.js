import React from "react";
import { Card } from "antd";
import * as util from "../../../../../lib/util";
import LikeButton from "../../../../../components/likeButton/LikeButton";

const { Meta } = Card;

export default function CharityCard(props) {
  const { data, history } = props;
  const images = JSON.parse(data.creative);
  function onCardClick(event) {
    const { target } = event;
    const classList = ".like-btn";
    if (target.classList.length && !target.matches(classList)) {
      history.push(`/app/donate/details/${data.id}`);
    }
  }

  return (
    <div className="charity-card" onClick={onCardClick}>
      <Card
        cover={
          <img
            className="charity-card-logo"
            alt="example"
            src={images["600x400"][0]}
          />
        }
        actions={[
          <span>{util.intToString(data.likeCount)} Likes</span>,
          <LikeButton {...props} />
        ]}
      >
        <Meta title={data.short_desc} description={data.long_desc} />
      </Card>
    </div>
  );
}
