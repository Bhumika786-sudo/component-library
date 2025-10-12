import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Label';

describe('Label Component', () => {
  test('renders label and is visible', () => {
    render(<Label text="Test Label" />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeVisible();
  });

  test('label changes style when disabled', () => {
    render(<Label text="Disabled Label" disabled={true} />);
    const labelElement = screen.getByText(/Disabled Label/i);
    expect(labelElement).toHaveStyle('cursor: not-allowed');
    expect(labelElement).toHaveStyle('background-color: #e0e0e0');
  });
});