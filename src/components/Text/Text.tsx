import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  background-color: ${(props: TextProps) =>
    props.disabled ? '#f0f0f0' : props.backgroundColor || 'transparent'};
  color: ${(props: TextProps) =>
    props.disabled ? '#999999' : props.textColor || '#000000'};
  font-size: ${(props: TextProps) => props.fontSize || '16px'};
  font-weight: ${(props: TextProps) => props.fontWeight || 'normal'};
  cursor: ${(props: TextProps) => (props.disabled ? 'not-allowed' : 'text')};
  opacity: ${(props: TextProps) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;
  margin: 0;
  padding: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Text: React.FC<TextProps> = ({
  content,
  disabled = false,
  backgroundColor,
  textColor,
  fontSize,
  fontWeight,
}) => {
  return (
    <StyledText
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      content={content}
    >
      {content}
    </StyledText>
  );
};

export default Text;
