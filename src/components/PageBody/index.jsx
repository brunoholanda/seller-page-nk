import React, { useState } from 'react';
import { useSwipeable } from "react-swipeable";
import { Outlet } from "react-router-dom";
import { StyledHeader, MenuIcon, StyledNav, MenuBar, MenuText, CloseIcon, StyledLink, StyledFooter, StyledHighHeader, StyledLogo } from './styles';
import { LinkedinOutlined,  RadiusSettingOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.png';
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

const HighHeader = () => {
  return (
    <StyledHighHeader>
      <a href="https://www.linkedin.com/in/brunoholanda/" target="_blank" rel="noopener" style={{ color: 'white', margin: '0 10px' }}><LinkedinOutlined /></a>
      <a href="https://twitter.com/NerdkingT" target="_blank" rel="noopener" style={{ color: 'white', margin: '0 10px' }}><TwitterOutlined /></a>
      <a href="https://www.youtube.com/user/nerdkingteam" target="_blank" rel="noopener" style={{ color: 'white', margin: '0 10px' }}><YoutubeOutlined /></a>
      <a href="https://nerdking.net.br/" target="_blank" rel="noopener" style={{ color: 'white', margin: '0 10px' }}><RadiusSettingOutlined /></a>
    </StyledHighHeader>

  )
}

const Footer = () => {
  return (
    <StyledFooter>
      <p>holandasoftware@gmail.com</p>
      <p>&copy; {new Date().getFullYear()} Bruno Holanda. Todos os direitos reservados.</p>
    </StyledFooter>
  );
};

export default function PageBody() {
  return (
    <>
      <HighHeader />
      <StyledLogo>
        <img src={logo} alt="logo da loja nerdking" />
      </StyledLogo>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
