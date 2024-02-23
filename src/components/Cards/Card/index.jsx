import React from 'react';
import { Card, CardImage, CardBody, CardTitle, CardText, StyledButton, CardPrice } from '../styles';
import { useProduto } from 'components/Context/ProdutoContext';
import mp from '../../../assets/icons/mp.png';
import { Link } from 'react-router-dom';
const CardProduto = ({ produto }) => {
  const { setProduto } = useProduto();

  const loadMercadoPagoSDK = () => {
    return new Promise((resolve, reject) => {
      if (window.MercadoPago) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        resolve();
      };

      script.onerror = (error) => {
        reject(error);
      };
    });
  };

  const initMercadoPago = () => {
    loadMercadoPagoSDK().then(() => {
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
        body: JSON.stringify({
          itemDetails: {
            title: produto.nome,
            description: produto.descricao,
            unit_price: produto.preco
          }
        }),
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
    }).catch(error => console.error('Erro ao carregar SDK do MercadoPago:', error));
  };

  return (
    <Card>
      <Link to={`/product-details/${produto.id}`}>
        <CardImage src={produto.imagens[0]} alt={produto.nome} />
      </Link>
      <CardBody>
        <CardTitle>{produto.nome}</CardTitle>
        <CardText>{produto.descricao}</CardText>
        <CardPrice>R$ {produto.preco},00</CardPrice>
        <Link to={`/product-details/${produto.id}`}>
          <p>Detalhes </p>
        </Link>
        <StyledButton onClick={initMercadoPago}>Compre com MercadoPago <img src={mp} alt="icone mercadopago" /></StyledButton>
      </CardBody>
    </Card>

  );
}

export default CardProduto;
