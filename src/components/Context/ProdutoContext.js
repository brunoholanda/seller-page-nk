import React, { createContext, useContext, useState, useEffect } from 'react';
import produtos from '../../database/db.js';

const ProdutoContext = createContext();

export const useProduto = () => useContext(ProdutoContext);

export const ProdutoProvider = ({ children }) => {
  const [produtosState, setProdutosState] = useState([]);

  useEffect(() => {
    setProdutosState(produtos);
  }, []);

  const findProdutoById = (id) => produtosState.find(produto => produto.id === parseInt(id));

  return (
    <ProdutoContext.Provider value={{ produtos: produtosState, findProdutoById }}>
      {children}
    </ProdutoContext.Provider>
  );
};

export { ProdutoContext };
