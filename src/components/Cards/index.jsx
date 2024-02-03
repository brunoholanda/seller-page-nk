// Cards.js
import React from 'react';
import produtos from '../../database/db';
import CardProduto from './Card';

const Cards = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {produtos.map(produto => (
        <CardProduto key={produto.id} produto={produto} />
      ))}
    </div>
  );
};

export default Cards;
