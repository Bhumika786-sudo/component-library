import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props: ButtonProps) => props.disabled ? '#cccccc' : props.backgroundColor || '#007bff'};
  color: ${(props: ButtonProps) => props.textColor || '#ffffff'};
  border: none;
  border-radius: 4px;
  padding: ${(props: ButtonProps) => {
    switch(props.size) {
      case 'small': return '8px 16px';
      case 'large': return '16px 32px';
      default: return '12px 24px';
    }
  }};
  font-size: ${(props: ButtonProps) => {
    switch(props.size) {
      case 'small': return '12px';
      case 'large': return '18px';
      default: return '14px';
    }
  }};
  cursor: ${(props: ButtonProps) => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${(props: ButtonProps) => props.disabled ? 0.6 : 1};
  transition: all 0.3s ease;
  
  &:hover {
    opacity: ${(props: ButtonProps) => props.disabled ? 0.6 : 0.8};
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 12px;
  }
`;

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  disabled = false, 
  backgroundColor, 
  textColor,
  size = 'medium' 
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      size={size}
      label={label}
    >
      {label}
    </StyledButton>
  );
};

export default Button;