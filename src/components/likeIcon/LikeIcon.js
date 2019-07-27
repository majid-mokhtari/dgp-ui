import React, { useState } from "react";
import { Icon } from "antd";
import styled from "styled-components";

const StyledHeartIcon = styled(Icon)`
  margin: 20px;
  font-size: 16px;
  color: #ff6363;
  &:hover {
    path {
      fill: #ff6363;
    }
  }
`;

export default function LikeIcon(props) {
  const [liked, setliked] = useState(false);
  return liked ? (
    <StyledHeartIcon
      type="heart"
      theme="filled"
      onClick={() => setliked(false)}
    />
  ) : (
    <StyledHeartIcon type="heart" onClick={() => setliked(true)} />
  );
}
