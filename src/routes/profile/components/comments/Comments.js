import React from "react";
import "./Comments.scss";
import json from "./CommentsJson.js";
import { Card, Button } from "antd";

export default function Comments(props) {
  return (
    <div className="comments-container">
      {json.data.comments.map(comments => (
        <Card key={comments.commentID}>
          <div className="external-user-comment-container">
            <div className="profile">
              <span className="picture">External Profile Pic</span>
              <span className="name"> Majid</span>
            </div>
            <div className="comment">
              Replied Me: Andy is the biggest loser...
            </div>
          </div>
          <div className="user-comment-container">
            <div className="profile">
              <span className="picture">Profile Pic</span>
              <span className="name"> JTao</span>
            </div>
            <span className="comment">{comments.content}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
