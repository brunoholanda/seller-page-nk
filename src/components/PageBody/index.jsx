import React, { useState } from 'react';
import { useSwipeable } from "react-swipeable";
import { Outlet } from "react-router-dom";
import { StyledHeader, MenuIcon, StyledNav, MenuBar, MenuText, CloseIcon, StyledLink, StyledFooter } from './styles'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsOpen(false),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <StyledHeader>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>&#9776;</MenuIcon>
      <StyledNav {...handlers} isOpen={isOpen}>
        <MenuBar>
          <MenuText>Menu</MenuText>
          <CloseIcon onClick={() => setIsOpen(false)}>&times;</CloseIcon>
        </MenuBar>
        <StyledLink to="/" onClick={() => setIsOpen(false)}>Home</StyledLink>
        <StyledLink to="/produtos" onClick={() => setIsOpen(false)}>Produtos</StyledLink>
        <StyledLink to="/sobre" onClick={() => setIsOpen(false)}>Sobre</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

const Footer = () => {
  return (
    <StyledFooter>
      <p>Contato: contato@nossaloja.com</p>
      <p>&copy; {new Date().getFullYear()} Nossa Loja. Todos os direitos reservados.</p>
    </StyledFooter>
  );
};

export default function PageBody() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
