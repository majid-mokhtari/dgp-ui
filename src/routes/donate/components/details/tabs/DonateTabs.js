import React from "react";
import { Tabs } from "antd";
import "./DonateTabs.scss";
import YouTube from "../../../../../components/youTube/YouTube";

const TabPane = Tabs.TabPane;

export default function DonateTabs(props) {
  function callback(key) {
    console.log(key);
  }

  return (
    <Tabs
      defaultActiveKey="about"
      onChange={callback}
      className="donate-details-tabs"
    >
      <TabPane tab="About" key="about">
        <div className="donate-tabs-content">
          <h2>About</h2>
          <p>
            The Earth is our only home. And the Sierra Club is dedicated to
            exploring, enjoying, and protecting it for everyone. Wildlife and
            wild places need you. Read More
          </p>
          <h2>Feature Content</h2>
          <YouTube
            video="pvXPYhK_LiI"
            width="100%"
            height="400"
            autoplay="0"
            rel="0"
            modest="1"
          />
          <h3>Are reusable coffee filters are good for enviornment?</h3>
          <div className="donate-about-article-link">
            <a href="https://www.redcross.org/donate/donation.html/">
              Read Full Article
            </a>
          </div>
        </div>
      </TabPane>
      <TabPane tab="Impace" key="impace">
        <div className="donate-tabs-content">Impace</div>
      </TabPane>
      <TabPane tab="Feeds" key="feeds">
        <div className="donate-tabs-content">Feeds</div>
      </TabPane>
      <TabPane tab="Community" key="community">
        <div className="donate-tabs-content">Community</div>
      </TabPane>
    </Tabs>
  );
}
