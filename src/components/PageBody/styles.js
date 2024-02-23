import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: var(--azul);
`;

export const StyledHighHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: .3rem 5rem;
  background-color: var(--azul);
`;

export const MenuIcon = styled.div`
  font-size: 30px;
  cursor: pointer;
  color: var(--branco);

`;

export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  height: 100vh;
  width: 150px;
  transition: left 0.3s;
  padding: 10px;
  background-color: var(--azul);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.7);
  z-index: 2;
`;

export const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const MenuText = styled.div`
  font-size: 24px;
  color: var(--branco);
`;

export const CloseIcon = styled.div`
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 8px 0;
  text-decoration: none;
  color: var(--branco);
`;

export const StyledFooter = styled.footer`
  padding: 8px;
  text-align: center;
  background-color: var(--azul);
  margin-top: 2rem;

  p {
    font-size: .8rem;
    color: var(--branco);
  }
`;
