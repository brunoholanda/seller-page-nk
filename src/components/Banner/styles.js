import styled from 'styled-components';

export const StyledBanner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; /* Defina um z-index menor que o do menu */

  img {
    width: 95vw;
    margin: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  p {
    position: absolute;
    top: 70%;
    transform: translateY(-50%);
    text-align: center;
    color: white;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 10px;
    z-index: 2;
    margin: 0 1.8rem;
  }

  @media (min-width: 768px) {
    p {
      font-size: 38px;
    }
  }
`;
