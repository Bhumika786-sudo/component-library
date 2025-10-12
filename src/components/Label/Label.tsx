import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  background-color: ${(props: LabelProps) => props.disabled ? '#e0e0e0' : props.backgroundColor || 'transparent'};
  color: ${(props: LabelProps) => props.disabled ? '#999999' : props.textColor || '#333333'};
  font-size: ${(props: LabelProps) => props.fontSize || '14px'};
  padding: 4px 8px;
  cursor: ${(props: LabelProps) => props.disabled ? 'not-allowed' : 'default'};
  opacity: ${(props: LabelProps) => props.disabled ? 0.6 : 1};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Label: React.FC<LabelProps> = ({ 
  text, 
  htmlFor, 
  disabled = false, 
  backgroundColor, 
  textColor,
  fontSize 
}) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      fontSize={fontSize}
      text={text}
    >
      {text}
    </StyledLabel>
  );
};

export default Label;