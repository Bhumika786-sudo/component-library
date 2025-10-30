import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

interface RadioContainerProps {
  disabled?: boolean;
}

interface LabelTextProps {
  disabled?: boolean;
  textColor?: string;
}

const RadioContainer = styled.label<RadioContainerProps>`
  display: flex;
  align-items: center;
  cursor: ${(props: RadioContainerProps) =>
    props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${(props: RadioContainerProps) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;
  user-select: none;
`;

const StyledRadio = styled.input<RadioButtonProps>`
  margin-right: 8px;
  cursor: ${(props: RadioButtonProps) =>
    props.disabled ? 'not-allowed' : 'pointer'};
  width: 18px;
  height: 18px;
  accent-color: ${(props: RadioButtonProps) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#007bff'};

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

const LabelText = styled.span<LabelTextProps>`
  color: ${(props: LabelTextProps) =>
    props.disabled ? '#999999' : props.textColor || '#333333'};
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked = false,
  onChange,
  disabled = false,
  backgroundColor,
  textColor,
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  return (
    <RadioContainer disabled={disabled}>
      <StyledRadio
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        backgroundColor={backgroundColor}
        textColor={textColor}
        label={label}
      />
      <LabelText disabled={disabled} textColor={textColor}>
        {label}
      </LabelText>
    </RadioContainer>
  );
};

export default RadioButton;
