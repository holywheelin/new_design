import React, { useState, useEffect, useCallback, MouseEvent } from 'react';
import styled from 'styled-components';

const amount = 2500;
const Card = styled.div`
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "3rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  maxWidth: "400px",
`;
const Button = styled.button`
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
`;

const Checkout = () => {
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('チケットを購入する');
  const [paymentMessage, setPaymentMessage] = useState('');
  const [stripeHandler, setStripeHandler] = useState<StripeCheckoutHandler>();

  const handleReset = () => {
    setDisabled(false);
    setButtonText('チケットを購入する');
  };

  useEffect(() => {
    const stripeHandler = window.StripeCheckout.configure({
      key: process.env.GATSBY_STRIPE_PUBLISHABLE_KEY,
      closed: handleReset,
    });
    setStripeHandler(stripeHandler);
  }, []);

  const handleCheckout = useCallback(
    (event: MouseEvent) => {
      if (!stripeHandler) {
        return;
      }

      setDisabled(true);
      setButtonText('WAITING...');
      stripeHandler.open({
        name: 'Demo Product',
        amount: amount,
        description: 'A product well worth your time',
        token: async (token) => {
          try {
            // TODO
            const response = await fetch(`AWS_LAMBDA_URL`, {
              method: 'POST',
              mode: 'no-cors',
              body: JSON.stringify({
                token,
                amount,
              }),
              headers: new Headers({
                'Content-Type': 'application/json',
              }),
            });
            handleReset();
            setPaymentMessage('Payment Successful!');
            return response;
          } catch (e) {
            setPaymentMessage('Payment Failed');
          }
        },
      });
    },
    [stripeHandler]
  );

  return (
    <Card>
      <h4>当日チケットを購入する</h4>
      <p>
        Use any email, 4242 4242 4242 4242 as the credit card number, any 3
        digit number, and any future date of expiration.
      </p>
      <Button onClick={handleCheckout} disabled={disabled}>
        {buttonText}
      </Button>
      {paymentMessage}
    </Card>
  );
};

export default Checkout;
