import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardImage, CardBody, CardTitle, CardText, BuyButton } from '../styles';
import { useProduto } from 'components/Context/ProdutoContext';

const CardProduto = ({ produto }) => {
  const navigate = useNavigate();
  const { setProduto } = useProduto();

  const handleBuy = () => {
    setProduto(produto); // Define o produto no estado global
    navigate('/cadastro'); // Navega para a página de cadastro
  };

  return (
    <Card>
      <CardImage src={produto.imagens[0]} alt={produto.nome} />
      <CardBody>
        <CardTitle>{produto.nome}</CardTitle>
        <CardText>{produto.descricao}</CardText>
        <CardText>R$ {produto.preco}</CardText>
        <BuyButton onClick={handleBuy}>Comprar</BuyButton>
      </CardBody>
    </Card>
  );
};

export default CardProduto;
