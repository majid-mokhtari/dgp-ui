import React from "react";
import YouTube from "../../../../../components/youTube/YouTube";

export default function FeaturedMedia() {
  return (
    <div className="featured-media">
      <YouTube
        video="pvXPYhK_LiI"
        autoplay="0"
        rel="0"
        modest="1"
        width="400"
        height="300"
      />
    </div>
  );
}
