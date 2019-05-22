import React from "react";
import { Form, Radio, Button, Icon, InputNumber } from "antd";
import "./earnSection.scss";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function EarnSection(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
    });
  }
  function onChange(val) {}

  const { getFieldDecorator } = props.form;
  return (
    <div className="earn-section">
      <h2 className="earn-section-title">Support & Earn</h2>

      <Form onSubmit={handleSubmit}>
        <h2>Donate</h2>
        <span>Earn 10 Points / $1 Donate</span>
        <Form.Item
          label="Select a donation amount"
          className="earn-form-amount"
        >
          {getFieldDecorator("amount")(
            <RadioGroup onChange={onChange}>
              <RadioButton value={10}>$10</RadioButton>
              <RadioButton value={15}>$15</RadioButton>
              <RadioButton value={20}>$20</RadioButton>
              <RadioButton value={25}>$25</RadioButton>
            </RadioGroup>
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
            <RadioGroup onChange={onChange}>
              <RadioButton value="creditCard">
                <Icon type="credit-card" /> Credit Card
              </RadioButton>
              <RadioButton value="paypal">
                <i className="fa fa-paypal" /> Paypal
              </RadioButton>
              <RadioButton value="points">
                <i className="fa fa-coins" /> Points
              </RadioButton>
            </RadioGroup>
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
