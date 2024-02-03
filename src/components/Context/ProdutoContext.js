// ProdutoContext.js
import React, { createContext, useContext, useState } from 'react';

const ProdutoContext = createContext();

export const useProduto = () => useContext(ProdutoContext);

export const ProdutoProvider = ({ children }) => {
  const [produto, setProduto] = useState(null);

  return (
    <ProdutoContext.Provider value={{ produto, setProduto }}>
      {children}
    </ProdutoContext.Provider>
  );
};
