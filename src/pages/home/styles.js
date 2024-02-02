import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto;
  text-align: center;

  h1 {
    margin: 2rem;
    font-size: 25px;
    color: #666;

  }
`;

export const StyledRow = styled(Row)`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2rem;
`;

export const StyledCol = styled(Col)`
    text-align: center;
    margin: 0 2rem;

    img {
        width: 320px;
        height: 320px;
    }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ProductTitle = styled.h1`
  font-size: 2em;
  color: #333;
`;

export const ProductDescription = styled.p`
  color: #666;
  font-size: 1em;
`;

export const ProductPrice = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: #000;
`;

export const BuyButton = styled(Button)`
    background-color: var(--azul);
    color: var(--branco);
    font-family: var(--fonte-secundaria);
    font-weight: 500;
    width: 250px;
    height: 40px;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: none;
    font-size: 20px;


  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
`;
