import React from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";


const CheckoutPayPal = ({ produto }) => {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [{
            description: produto.nome,
            amount: {
              currency_code: "BRL",
              value: produto.preco.toString(),
            },
          }],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then(details => {
          alert("Transação completada por " + details.payer.name.given_name);
          // Aqui você pode redirecionar o usuário ou atualizar o estado do seu app
        });
      }}
    />
  );
};

export default CheckoutPayPal;
