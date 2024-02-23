import styled from 'styled-components';

// Adicionando ao arquivo styles.js existente
export const Card = styled.div`
  width: 100%;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  width: 80%;
  height: 290px;
  object-fit: cover;
  margin: 1rem 2rem 0 2rem;
`;

export const CardBody = styled.div`
  padding: 30px;
`;

export const CardTitle = styled.h5`
  margin: 0;
  font-size: 1.25rem;
  color: var(--cinza-texto);
`;

export const CardText = styled.p`
  font-size: 1rem;
  color: var(--cinza-texto);
`;

export const CardPrice = styled.p`
  font-size: 1.2rem;
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
