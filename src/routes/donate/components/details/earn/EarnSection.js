import React, { useEffect, useState } from "react";
import { Form, Radio, Button, Icon, InputNumber } from "antd";
import PaypalButton from "./PayPal";
import "./earnSection.scss";
import styled from "styled-components";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const StyledRadioGroup = styled(RadioGroup)`
  display: flex !important;
  justify-content: center;
`;

const CLIENT = {
  sandbox:
    "AZuWGX3QN7h_CQKsh4RzsIRAbcsNBwoAi-MZjV4a1mpBwg05kZzgXB31N39Cp1j05bZr6T9grJRN1oCK",
  production: "xxxXXX"
};

const ENV = process.env.NODE_ENV === "production" ? "production" : "sandbox";

function EarnSection(props) {
  const [amount, setAmount] = useState(10);
  const [paypalButtonRef, setPaypalButtonRef] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, fieldsValue) => {
      paypalButtonRef.current.querySelector(".paypal-button").click();
      console.log(paypalButtonRef.current.querySelector(".paypal-button"));
      if (err) {
        return;
      }
    });
  }

  function onChange(val) {}

  const { getFieldDecorator } = props.form;

  useEffect(() => {
    props.form.setFieldsValue({
      amount: 10,
      frequency: "single",
      paymentMethod: "creditCard"
    });
  }, []);

  useEffect(() => {
    props.form.setFieldsValue({ amount });
  }, [amount]);

  const onSuccess = payment => console.log("Successful payment!", payment);

  const onError = error =>
    console.log("Erroneous payment OR failed to load script!", error);

  const onCancel = data => console.log("Cancelled payment!", data);

  return (
    <div className="earn-section">
      <h2 className="earn-section-title">Support & Earn</h2>
      <Form onSubmit={handleSubmit}>
        <h2>Donate</h2>
        <span>Earn 10 Points / $1 Donate</span>
        <div className="earn-form-amounts">
          <span>Select a donation amount</span>
          <div className="amounts">
            <div
              className={amount === 10 ? "checked" : ""}
              onClick={() => setAmount(10)}
            >
              <span>$10</span>
              <span>500 pts</span>
            </div>
            <div
              className={amount === 15 ? "checked" : ""}
              onClick={() => setAmount(15)}
            >
              <span>$15</span>
              <span>750 pts</span>
            </div>
            <div
              className={amount === 20 ? "checked" : ""}
              onClick={() => setAmount(20)}
            >
              <span>$20</span>
              <span>1000 pts</span>
            </div>
            <div
              className={amount === 50 ? "checked" : ""}
              onClick={() => setAmount(50)}
            >
              <span>$50</span>
              <span>2500 pts</span>
            </div>
          </div>
        </div>
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
        <Form.Item label="Frequency" className="earn-form-frequency">
          {getFieldDecorator("frequency")(
            <RadioGroup onChange={onChange}>
              <RadioButton value="single">Single</RadioButton>
              <RadioButton value="monthly">Monthly</RadioButton>
            </RadioGroup>
          )}
        </Form.Item>
        <Form.Item label="Payment Method" className="earn-form-paymentMethod">
          {getFieldDecorator("paymentMethod")(
            <StyledRadioGroup onChange={onChange}>
              <RadioButton value="creditCard">
                <Icon type="credit-card" /> Credit Card
              </RadioButton>
              <RadioButton value="payPal">
                <Icon type="credit-card" /> Paypal
              </RadioButton>
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
              />
            </StyledRadioGroup>
          )}
        </Form.Item>
        <Form.Item className="earn-form-button">
          <Button type="primary" htmlType="submit">
            Donate
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Form.create()(EarnSection);
