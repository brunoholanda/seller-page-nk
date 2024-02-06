import { ProdutoProvider } from 'components/Context/ProdutoContext';
import CardProduto from 'components/Cards/Card';
import PageBody from 'components/PageBody';
import Cadastro from 'pages/Cadastro';
import HomePage from 'pages/home';
import React, { useEffect } from 'react';
import { Route, Routes, HashRouter, useLocation } from 'react-router-dom';
import Pagamento from 'pages/Pagamento';


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

  return (
    <HashRouter>
      <ScrollToTop />
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
    </HashRouter>
  );
}

export default AppRoutes;
