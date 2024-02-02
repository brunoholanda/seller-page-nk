import React, { useEffect } from 'react';
import { Route, Routes, HashRouter, useLocation } from 'react-router-dom';

import HomePage from './pages/home'

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
      <Routes>
          <Route index element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
