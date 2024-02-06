import styled from 'styled-components';

// Adicionando ao arquivo styles.js existente
export const Card = styled.div`
  width: 18rem;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardBody = styled.div`
  padding: 10px;
`;

export const CardTitle = styled.h5`
  margin: 0;
  font-size: 1.25rem;
`;

export const CardText = styled.p`
  font-size: 1rem;
`;

export const BuyButton = styled.a`
  display: inline-block;
  color: #fff;
  background-color: var(--azul); 
  border: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
`;
