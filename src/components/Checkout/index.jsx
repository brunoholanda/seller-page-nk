import React, { useEffect, useRef, useState } from 'react';

const Checkout = ({ produto }) => {
  const [loaded, setLoaded] = useState(false);
  const [paid, setPaid] = useState(false);

  let paypalRef = useRef();

  const product = {
    price: 15.70,
    description: "Curso Teste",
  }


  useEffect(() => {
    const script = document.createElement("script");
    const id = "Ae-V5MaqGMXeIRX5R8HdXPHs0xR6l4r-XLJsec8XHJiHGXQDOm-Z8QKWMAF7OL8qXx88jW057sHSrMet"
    script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`

    script.addEventListener("load", () => setLoaded(true));

    document.body.appendChild(script);

    if (loaded) {
      function loadButtonsAndLogicAboutPayment() {
        setTimeout(() => {
          window.paypal
            .Buttons({
              createOrder: (data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: product.description,
                      amount: {
                        currency_code: "BRL",
                        value: product.price
                      }
                    }
                  ]
                });
              },
              onApprove: async (_, actions) => {
                const order = await actions.order.capture();

                setPaid(true);
                console.log(order);
              }
            })
            .render(paypalRef);
        })
      }
      loadButtonsAndLogicAboutPayment();
    }
  })

  return (
    <div>
      {paid ? (
        <div>
          <h1>Parabens , voce comprou</h1>
        </div>
      ) : (
        <>
          <h1>{product.description} por R${product.price}</h1>
          <div ref={v => (paypalRef = v)} />
        </>
      )}
    </div>
  )

}
export default Checkout;
