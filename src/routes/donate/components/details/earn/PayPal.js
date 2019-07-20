import React, { useEffect, useRef, Fragment } from "react";
import { useScript } from "../../../../../customHooks/scriptLoader";
import ReactDOM from "react-dom";

const PaypalButton = ({
  total,
  currency,
  env,
  commit,
  client,
  onSuccess,
  onError,
  onCancel,
  setPaypalButtonRef = () => {}
}) => {
  window.React = React;
  window.ReactDOM = ReactDOM;
  const paypal = window.PAYPAL;
  const [loaded, error] = useScript(
    "https://www.paypalobjects.com/api/checkout.js"
  );

  const paypalButtonRef = useRef();

  useEffect(() => {
    if (paypalButtonRef.current) {
      setPaypalButtonRef(paypalButtonRef);
    }
  }, [paypalButtonRef]);

  const payment = () =>
    paypal.rest.payment.create(env, client, {
      transactions: [
        {
          amount: {
            total,
            currency
          }
        }
      ],
      redirect_urls: {
        return_url: "http://localhost:3000/app?partnerId=1&memberId=2"
      }
    });

  const onAuthorize = (data, actions) =>
    actions.payment.execute().then(() => {
      const payment = {
        paid: true,
        cancelled: false,
        payerID: data.payerID,
        paymentID: data.paymentID,
        paymentToken: data.paymentToken,
        returnUrl: data.returnUrl
      };

      onSuccess(payment);
    });

  return (
    <div className="paypal-button-container" ref={paypalButtonRef}>
      {loaded && !error && (
        <paypal.Button.react
          env={env}
          client={client}
          commit={commit}
          payment={payment}
          onAuthorize={onAuthorize}
          onCancel={onCancel}
          onError={onError}
        />
      )}
    </div>
  );
};
export default PaypalButton;
