import React from "react";
import { Tabs } from "antd";
import Home from "./Home";
import styled from "styled-components";
import About from "./About";
import Impact from "./Impact";
import Feeds from "./Feeds";
import Community from "./Community";

const StyledTabsContainer = styled.div`
  margin: 20px 0;
  width: 60%;
  background-color: #fff;
  min-width: 800px;
`;

const TabPane = Tabs.TabPane;

export default function DonateTabs(props) {
  function callback(key) {}
  return (
    <StyledTabsContainer>
      <Tabs defaultActiveKey="community" onChange={callback}>
        <TabPane tab="Home" key="home">
          <Home {...props} />
        </TabPane>
        <TabPane tab="About" key="about">
          <About {...props} />
        </TabPane>
        <TabPane tab="Impact" key="impact">
          <Impact {...props} />
        </TabPane>
        <TabPane tab="Feeds" key="feeds">
          <Feeds {...props} />
        </TabPane>
        <TabPane tab="Community" key="community">
          <Community {...props} />
        </TabPane>
      </Tabs>
    </StyledTabsContainer>
  );
}
