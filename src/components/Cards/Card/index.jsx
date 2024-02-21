import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardImage, CardBody, CardTitle, CardText, BuyButton } from '../styles';
import { useProduto } from 'components/Context/ProdutoContext';

const CardProduto = ({ produto }) => {
  const { setProduto } = useProduto();

  const loadMercadoPagoSDK = () => {
    const script = document.createElement('script');
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      initMercadoPago();
    };
  };

  const initMercadoPago = () => {
    if (!window.MercadoPago) {
      console.error('SDK do MercadoPago não está carregado.');
      return;
    }

    const mp = new window.MercadoPago('TEST-0f4f4060-a4af-4549-a662-3a7528d5e6eb', { locale: 'pt-BR' });

    fetch('http://127.0.0.1:3333/create_preference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ itemDetails: { 
        title: produto.nome,
        description: produto.descricao,
        unit_price: produto.preco
      }}),
    })
    .then(response => response.json())
    .then(data => {
      mp.checkout({
        preference: {
          id: data.id 
        },
        autoOpen: true, 
      });
    })
    .catch(error => console.error('Erro ao criar a preferência de pagamento:', error));
  };

  // Use useEffect para carregar o SDK quando o componente for montado
  useEffect(() => {
    loadMercadoPagoSDK();
  }, []);

  return (
    <Card>
      <CardImage src={produto.imagens[0]} alt={produto.nome} />
      <CardBody>
        <CardTitle>{produto.nome}</CardTitle>
        <CardText>{produto.descricao}</CardText>
        <CardText>R$ {produto.preco}</CardText>
        <div className="buy-button">
          <button onClick={initMercadoPago}>Pagar com MercadoPago</button>
        </div>
      </CardBody>
    </Card>
  );
}

export default CardProduto;
