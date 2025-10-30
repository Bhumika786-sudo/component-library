import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  test('renders card and is visible', () => {
    render(<Card title="Test Card" content="Test content" />);
    const cardElement = screen.getByText(/Test Card/i);
    expect(cardElement).toBeVisible();
  });

  test('card changes style when disabled', () => {
    const { container } = render(
      <Card title="Disabled Card" content="Disabled content" disabled={true} />
    );
    const card = container.firstChild;
    expect(card).toHaveStyle('cursor: not-allowed');
    expect(card).toHaveStyle('background-color: #f5f5f5');
  });
});
