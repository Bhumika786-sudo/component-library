import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

interface StyledSelectProps {
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

const StyledSelect = styled.select<StyledSelectProps>`
  background-color: ${(props) =>
    props.disabled ? '#e0e0e0' : props.backgroundColor || '#ffffff'};
  color: ${(props) =>
    props.disabled ? '#999999' : props.textColor || '#333333'};
  border: 1px solid ${(props) => (props.disabled ? '#cccccc' : '#007bff')};
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 14px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;
  width: 100%;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.disabled ? '#cccccc' : '#0056b3')};
  }

  @media (max-width: 768px) {
    min-width: 150px;
    font-size: 12px;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = 'Select an option',
  onChange,
  disabled = false,
  backgroundColor,
  textColor,
}) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <StyledSelect
      value={selectedValue}
      onChange={handleChange}
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
