import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

describe('Text Component', () => {
  test('renders text and is visible', () => {
    render(<Text content="Test Text" />);
    const textElement = screen.getByText(/Test Text/i);
    expect(textElement).toBeVisible();
  });

  test('text changes style when disabled', () => {
    render(<Text content="Disabled Text" disabled={true} />);
    const textElement = screen.getByText(/Disabled Text/i);
    expect(textElement).toHaveStyle('cursor: not-allowed');
    expect(textElement).toHaveStyle('background-color: #f0f0f0');
  });
});
