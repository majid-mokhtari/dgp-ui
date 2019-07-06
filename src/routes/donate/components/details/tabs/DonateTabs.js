import React from "react";
import { Tabs } from "antd";
import YouTube from "../../../../../components/youTube/YouTube";
import styled from "styled-components";

const StyledTabsContainer = styled.div`
  margin: 20px 0;
  width: 60%;
  background-color: #fff;
  min-width: 800px;
`;
const StyledTabContent = styled.div`
  padding: 30px;
`;
const StyledDonateLink = styled.div`
  text-align: center;
`;

const TabPane = Tabs.TabPane;

export default function DonateTabs(props) {
  function callback(key) {}

  return (
    <StyledTabsContainer>
      <Tabs defaultActiveKey="about" onChange={callback}>
        <TabPane tab="About" key="about">
          <StyledTabContent>
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
            <StyledDonateLink>
              <a href="https://www.redcross.org/donate/donation.html/">
                Read Full Article
              </a>
            </StyledDonateLink>
          </StyledTabContent>
        </TabPane>
        <TabPane tab="Impace" key="impace">
          <div>Impace</div>
        </TabPane>
        <TabPane tab="Feeds" key="feeds">
          <div>Feeds</div>
        </TabPane>
        <TabPane tab="Community" key="community">
          <div>Community</div>
        </TabPane>
      </Tabs>
    </StyledTabsContainer>
  );
}
