import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  test('renders dropdown and is visible', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} />);
    const dropdownElement = screen.getByRole('combobox');
    expect(dropdownElement).toBeVisible();
  });

  test('dropdown changes style when disabled', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} disabled={true} />);
    const dropdownElement = screen.getByRole('combobox');
    expect(dropdownElement).toBeDisabled();
    expect(dropdownElement).toHaveStyle('cursor: not-allowed');
    expect(dropdownElement).toHaveStyle('background-color: #e0e0e0');
  });
});