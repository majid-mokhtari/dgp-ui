import React, { useEffect } from "react";
import { Form, Radio, InputNumber } from "antd";
import PaypalButton from "./PayPal";
import styled from "styled-components";

const StyledForm = styled(Form)`
  .ant-input-number {
    width: 100% !important;
  }
`;

const StyledRadioGroup = styled(Radio.Group)`
  width: 100%;
  display: flex !important;
  justify-content: space-between;
  margin-top: 20px !important;
  .ant-radio-button-wrapper {
    text-align: center;
  }
  label {
    width: 20%;
  }
  .ant-radio-button-wrapper.ant-radio-button-wrapper-checked {
    background-color: #fdbfb8;
    color: black;
  }
`;

const CLIENT = {
  sandbox:
    "AZuWGX3QN7h_CQKsh4RzsIRAbcsNBwoAi-MZjV4a1mpBwg05kZzgXB31N39Cp1j05bZr6T9grJRN1oCK",
  production: "xxxXXX"
};

const ENV = process.env.NODE_ENV === "production" ? "production" : "sandbox";

function MonthlyForm(props) {
  const { partnerId } = props.match.params;
  const { memberId, isLoggedIn, offerID } = props;
  const { getFieldDecorator, getFieldValue } = props.form;

  useEffect(() => {
    props.form.setFieldsValue({
      amount: 10
    });
  }, []);

  const amount = getFieldValue("amount");
  const onSuccess = payment => console.log("Successful payment!", payment);

  const onError = error =>
    console.log("Erroneous payment OR failed to load script!", error);

  const onCancel = data => console.log("Cancelled payment!", data);

  return (
    <StyledForm>
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
    </StyledForm>
  );
}

export default Form.create()(MonthlyForm);
