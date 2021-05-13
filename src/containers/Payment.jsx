import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();

  const paypalOptions = {
    clientId:
      'Ac87YVHph-OWtMWU9TSy7mR01zmxzC5cfhuXEAipNX5ZmTz2wEs_MWwC1k42tOkbg8m8I_r4FuWhM6kQ',
    // intent: 'capture',
    // currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    color: 'gold',
    shape: 'rect',
    label: 'paypal',
  };

  const handlePaymentSuccess = (data) => {
    console.log('payment success', data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  const handleSumtotal = () => {
    const reducer = (acc, curr) => acc + curr.price;
    const sum = cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => {
          return (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
            </div>
          );
        })}
        <div className="Payment-button">
          <PayPalButton
            style={buttonStyles}
            amount={handleSumtotal()}
            options={paypalOptions}
            onButtonReady={() => console.log('Start Payment')}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              alert(
                'Transaction completed by ' + details.payer.name.given_name
              );

              // OPTIONAL: Call your server to save the transaction
              addNewOrder(newOrder);
              history.push('/checkout/success');
              // return fetch('/paypal-transaction-complete', {
              //   method: 'post',
              //   body: JSON.stringify({
              //     orderID: data.orderID,
              //   }),
              // });
            }}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div>{/* Sidebar */}</div>
    </div>
  );
};

export default Payment;

// (data) => {
//               handlePaymentSuccess(data);
//             }
