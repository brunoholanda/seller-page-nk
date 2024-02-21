import { ProdutoProvider } from 'components/Context/ProdutoContext';
import CardProduto from 'components/Cards/Card';
import PageBody from 'components/PageBody';
import Cadastro from 'pages/Cadastro';
import HomePage from 'pages/home';
import React, { useEffect } from 'react';
import { Route, Routes, HashRouter, useLocation } from 'react-router-dom';
import Pagamento from 'pages/Pagamento';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Checkout from 'components/Checkout';


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
    "client-id": "AcR5ozJ0sDkZ8sNUNUnlrOt2PfER_S1FogTUUFsUtmujE1rNKnsY8gOhDOrm4eyPKpSwWpT3GKQgd9ep",
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
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </ProdutoProvider>
      </PayPalScriptProvider>
    </HashRouter>
  );
}

export default AppRoutes;
