import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Img';

describe('Img Component', () => {
  test('renders image and is visible', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Test Image" />);
    const imgElement = screen.getByAltText(/Test Image/i);
    expect(imgElement).toBeVisible();
  });

  test('image changes style when disabled', () => {
    render(
      <Img
        src="https://via.placeholder.com/150"
        alt="Disabled Image"
        disabled={true}
      />
    );
    const imgElement = screen.getByAltText(/Disabled Image/i);
    expect(imgElement).toHaveStyle('cursor: not-allowed');
    expect(imgElement).toHaveStyle('filter: grayscale(100%)');
  });
});
