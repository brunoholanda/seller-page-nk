import { ProdutoProvider } from 'components/Context/ProdutoContext';
import CardProduto from 'components/Cards/Card';
import PageBody from 'components/PageBody';
import Cadastro from 'pages/Cadastro';
import HomePage from 'pages/home';
import React, { useEffect } from 'react';
import { Route, Routes, HashRouter, useLocation } from 'react-router-dom';
import Pagamento from 'pages/Pagamento';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';


function AppRoutes() {

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

    }, [pathname]);

    return null;
  }


  const initialOptions = {
    "client-id": "AZ9gy1sEspvcJhUawtOQYSSx8YTGYUCkpQxcXxIyq7so5bJ5D24qYsdm0v7zK66fH3OwTYTKeldX2FRL",
    currency: "BRL",
    intent: "capture",
  };
  return (
    <HashRouter>
      <ScrollToTop />
      <PayPalScriptProvider options={initialOptions}>
        <ProdutoProvider>
          <Routes>
            <Route path="/" element={<PageBody />}>
              <Route index element={<HomePage />} />
              <Route path="/" element={<CardProduto />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/pagamento" element={<Pagamento />} />
            </Route>
          </Routes>
        </ProdutoProvider>
      </PayPalScriptProvider>
    </HashRouter>
  );
}

export default AppRoutes;
