import styled from 'styled-components';
import { Form, Button, Input } from 'antd';

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
  &.ant-btn-primary {
    background-color: #004d40; 
    border-color: #004d40; 
    
    &:hover, &:focus {
      background-color: #00332a; 
      border-color: #00251a;
    }
  }
`;

