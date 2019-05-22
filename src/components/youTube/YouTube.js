import React from "react";
import "./youTube.scss";

const YouTube = props => {
  var videoSrc =
    "https://www.youtube.com/embed/" +
    props.video +
    "?autoplay=" +
    props.autoplay +
    "&rel=" +
    props.rel +
    "&modestbranding=" +
    props.modest;

  return (
    <div className="container">
      <iframe
        className="youtube-player"
        type="text/html"
        width={props.width}
        height={props.height}
        src={videoSrc}
        frameBorder="0"
        title="featured-video"
      />
    </div>
  );
};

export default YouTube;
