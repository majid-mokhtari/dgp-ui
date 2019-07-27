import React from "react";
import { Collapse } from "antd";
import styled from "styled-components";
import OneTimeForm from "./OneTimeForm";
import MonthlyForm from "./MonthlyForm";
import PointsForm from "./PointsForm";

const { Panel } = Collapse;

const StyledEarnSection = styled.div`
  min-width: 35%;
  justify-content: center;
  margin-left: 30px;
  margin-top: 20px;
`;
const StyledTitle = styled.div`
  text-align: center;
  border-top: 5px solid #00ce6f;
  background-color: #fff;
  padding: 5px 0;
`;

const StyledCollapse = styled(Collapse)`
  .ant-collapse-extra {
    color: #00c6c0 !important;
  }
`;

const StyledPanelHeader = styled.span`
  font-size: 15px;
  line-height: 1.4;
`;

function EarnSection(props) {
  const { featuredOffer } = props;
  let offerID = 0;
  if (featuredOffer) {
    offerID = featuredOffer.offerID;
  }

  const getExtra = text => {
    return (
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/star.svg`} />{" "}
        <span>{text}</span>
      </div>
    );
  };

  return (
    <StyledEarnSection>
      <StyledTitle>Support & Earn</StyledTitle>
      <StyledCollapse defaultActiveKey="1" accordion>
        <Panel
          header={<StyledPanelHeader>Donate One Time</StyledPanelHeader>}
          extra={getExtra("Earn 10 Points / $1 Donate")}
          key="1"
        >
          <OneTimeForm {...props} offerID={offerID} />
        </Panel>
        <Panel
          header="Donate Monthly (6 mo. )"
          key="2"
          extra={getExtra("Earn 20 Points / $1 Donate")}
        >
          <MonthlyForm {...props} />
        </Panel>
        <Panel
          header="Donate Using Points"
          key="3"
          extra={getExtra("Earn 10 Points / 50 Points Donate")}
        >
          <PointsForm {...props} />
        </Panel>
      </StyledCollapse>
    </StyledEarnSection>
  );
}

export default EarnSection;
