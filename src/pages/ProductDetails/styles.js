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

export const StyledRowBack = styled(Row)`
    flex-direction: row;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0 0 1.5rem;
    align-items: center;
    cursor: pointer;

  p {
    font-weight: bold;
    margin: 0;
  }
`;

export const StyledRow = styled(Row)`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2rem;

`;

export const StyledRowDescription = styled(Row)`
    flex-direction: row;
    justify-content: center;
  margin: 0 2rem 2rem 2rem;

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
  font-size: 1.3em;
  font-weight: bold;
  color: var(--cinza-texto);
`;


export const StyledButton = styled.button`
  display: inline-block;
  color: #fff;
  background-color: var(--azul); 
  border: none;
  padding: 0.575rem 1rem;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  text-decoration: none;
  cursor: pointer;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }

  img {
    width: 35px;
    margin: 0 0 0 .5rem;
  }
`;


export const MarkdownContainer = styled.p`
  text-align: left;
  margin: 0 1.5rem;
  color: var(--cinza-texto);

  h3 {
    text-align: center;
  }

  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }

  li {
    position: relative; 
    padding-left: 25px; 
    list-style: none;
}

li::before {
    content: '✔'; 
    position: absolute;
    left: 0; 
    top: 0; 
}

`;
