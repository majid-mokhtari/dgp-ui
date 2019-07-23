import React, { useEffect, useState } from "react";
import { Form, Radio, Button, Icon, InputNumber, Collapse } from "antd";
import PaypalButton from "./PayPal";
import "./earnSection.scss";
import styled from "styled-components";

const { Panel } = Collapse;

const CLIENT = {
  sandbox:
    "AZuWGX3QN7h_CQKsh4RzsIRAbcsNBwoAi-MZjV4a1mpBwg05kZzgXB31N39Cp1j05bZr6T9grJRN1oCK",
  production: "xxxXXX"
};

const ENV = process.env.NODE_ENV === "production" ? "production" : "sandbox";

const StyledCollapse = styled(Collapse)`
  .ant-collapse-extra {
    color: #00c6c0 !important;
  }
`;

const StyledRadioGroup = styled(Radio.Group)`
  display: flex !important;
  justify-content: space-between;
  margin-top: 20px !important;
  label {
    width: 20%;
  }
  .ant-radio-button-wrapper.ant-radio-button-wrapper-checked {
    background-color: #fdbfb8;
    color: black;
  }
`;
const StyledPanelHeader = styled.span`
  font-size: 15px;
  line-height: 1.4;
`;

function EarnSection(props) {
  const [paypalButtonRef, setPaypalButtonRef] = useState();
  const { partnerId } = props.match.params;
  const { featuredOffer, memberId, isLoggedIn } = props;
  let offerID = 0;
  if (featuredOffer) {
    offerID = featuredOffer.offerID;
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, fieldsValue) => {
      paypalButtonRef.current.querySelector(".paypal-button").click();
      if (err) {
        return;
      }
    });
  }

  const getExtra = text => {
    return (
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/star.svg`} />{" "}
        <span>{text}</span>
      </div>
    );
  };

  const { getFieldDecorator, getFieldValue } = props.form;
  const amount = getFieldValue("amount");

  useEffect(() => {
    props.form.setFieldsValue({
      amount: 10
    });
  }, []);

  const onSuccess = payment => console.log("Successful payment!", payment);

  const onError = error =>
    console.log("Erroneous payment OR failed to load script!", error);

  const onCancel = data => console.log("Cancelled payment!", data);

  return (
    <div className="earn-section">
      <h2 className="earn-section-title">Support & Earn</h2>
      <StyledCollapse defaultActiveKey={["1"]}>
        <Panel
          header={<StyledPanelHeader>Donate One Time</StyledPanelHeader>}
          extra={getExtra("Earn 10 Points / $1 Donate")}
          key="1"
        >
          <Form onSubmit={handleSubmit}>
            <label>Select a donation amount</label>
            <Form.Item>
              {getFieldDecorator("amount")(
                <StyledRadioGroup>
                  <Radio.Button value={10}>$10</Radio.Button>
                  <Radio.Button value={15}>$15</Radio.Button>
                  <Radio.Button value={20}>$20</Radio.Button>
                  <Radio.Button value={25}>$25</Radio.Button>
                </StyledRadioGroup>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("amount")(
                <InputNumber
                  formatter={value =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={value => value.replace(/\$\s?|(,*)/g, "")}
                />
              )}
            </Form.Item>

            <PaypalButton
              setPaypalButtonRef={ref => setPaypalButtonRef(ref)}
              client={CLIENT}
              env={ENV}
              commit={true}
              currency={"USD"}
              total={amount}
              onSuccess={onSuccess}
              onError={onError}
              onCancel={onCancel}
              memberId={isLoggedIn ? memberId : 0}
              partnerId={partnerId}
              offerId={offerID}
              onClick={() => console.log("clicked")}
            />
          </Form>
        </Panel>
        <Panel
          header="Donate Monthly (6 mo. )"
          key="2"
          extra={getExtra("Earn 20 Points / $1 Donate")}
        >
          <p>Donate Monthly (6 mo. )</p>
        </Panel>
        <Panel
          header="Donate Using Points"
          key="3"
          extra={getExtra("Earn 10 Points / 50 Points Donate")}
        >
          <p>Donate Using Points</p>
        </Panel>
      </StyledCollapse>
    </div>
  );
}

export default Form.create()(EarnSection);
