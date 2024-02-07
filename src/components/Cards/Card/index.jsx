import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardImage, CardBody, CardTitle, CardText, BuyButton } from '../styles';
import { useProduto } from 'components/Context/ProdutoContext';
import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from '@paypal/react-paypal-js';


const CardProduto = ({ produto }) => {
  const { setProduto } = useProduto();
  const [{ options }, dispatch] = usePayPalScriptReducer();

  // Atualiza as opções do PayPal Script para usar a moeda do produto
  const updateCurrency = (currency) => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  };

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [{
        amount: {
          currency_code: produto.moeda || 'BRL', // Use a moeda do produto ou 'BRL' como padrão
          value: produto.preco, // Preço do produto
        },
        description: produto.nome, // Nome do produto
      }]
    });
  };

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transação concluída por ${name}`);
      // Aqui você pode adicionar lógica adicional pós-aprovação, como redirecionamento ou atualização de estado
    });
  };

  // Atualizar a moeda quando o componente é montado ou quando a moeda do produto muda
  React.useEffect(() => {
    if (produto.moeda) {
      updateCurrency(produto.moeda);
    }
  }, [produto.moeda]);


  return (
    <Card>
      <CardImage src={produto.imagens[0]} alt={produto.nome} />
      <CardBody>
        <CardTitle>{produto.nome}</CardTitle>
        <CardText>{produto.descricao}</CardText>
        <CardText>R$ {produto.preco}</CardText>
        <div>

          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => onCreateOrder(data, actions)}
            onApprove={(data, actions) => onApproveOrder(data, actions)}
          />
        </div>

      </CardBody>
    </Card>
  );

}
export default CardProduto;
