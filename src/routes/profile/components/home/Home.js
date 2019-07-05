import React from "react";
import "./Home.scss";
import { Card, Button } from "antd";

export default function Home(props) {
  return (
    <div className="home-container">
      <Card className="profile-basic-info-container">
        <div className="profile-picture">
          <span>PICTURE</span>
        </div>
        <div className="profile-basic-info">
          <div className="name"> Hi, NERD</div>
          <div className="points-balance-title"> Available Point Balance</div>
          <div className="points-balance">800 Points</div>
          <Button type="primary">Refer & Earn 200 Poi</Button>
        </div>
      </Card>

      <span className="points-container">
        <Card className="points-earned">
          <div className="party-icon"> SOME ICON</div>
          <div className="points"> 3500</div>
          <div> Life Time Points Earned</div>
          <div className="earn-more-link">Earn More</div>
        </Card>
        <Card className="points-donated">
          <div className="party-icon"> SOME ICON</div>
          <div className="points"> $500</div>
          <div> Values Donated</div>
          <div className="earn-more-link">Donate More</div>
        </Card>
      </span>

      <span className="recent-activity-container">
        <div className="title"> Recent Activity</div>
        <Card className="recent-activity-donated">
          <div className="recent-donation">
            On Feb 21, 2019 you donated 0 to Sierra Clib
          </div>
          <div className="recent-donate-more">Donate Again</div>
        </Card>
        <Card className="recent-activity-earned">
          <div className="recent-earn">
            On Feb 21, 2019 you said "I hate Andy Choi" to DGP Group
          </div>
          <div className="recent-earn-go-back">Back To THe Conversation</div>
        </Card>
      </span>

      <span className="Recommendation-container">Recomendations</span>
    </div>
  );
}
