import styled from 'styled-components';
import { Form, Button, Input } from 'antd';

export const CadastroPage = styled(Form)`
  margin: .5rem 1rem;
  text-align: center;
`;

export const StyledForm = styled(Form)`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white; 
`;

export const StyledInput = styled(Input)`
  &.ant-input {
    border-radius: 4px; 
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 40px;

  &.ant-btn-primary {
    background-color: var(--azul); 
    border: none;
    font-size: 16px;
    
    &:hover, &:focus {
      background-color: #00332a; 
      border-color: #00251a;
    }
  }
`;

