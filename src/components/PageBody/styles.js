import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: '#f8f9fa';
`;

export const MenuIcon = styled.div`
  font-size: 30px;
  cursor: pointer;
`;

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  height: 100vh;
  width: 200px;
  background-color: #fff;
  transition: left 0.3s;
  padding: 10px;
`;

export const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const MenuText = styled.div`
  font-size: 24px;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 10px 0;
  text-decoration: none;
  color: black;
`;

export const StyledFooter = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: '#f8f9fa';
`;
