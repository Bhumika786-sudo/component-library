import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  test('renders hero image and is visible', () => {
    render(<HeroImage src="https://via.placeholder.com/1200x400" alt="Test Hero" title="Test Title" />);
    const heroElement = screen.getByAltText(/Test Hero/i);
    expect(heroElement).toBeVisible();
  });

  test('hero image changes style when disabled', () => {
    const { container } = render(
      <HeroImage src="https://via.placeholder.com/1200x400" alt="Disabled Hero" disabled={true} />
    );
    const heroContainer = container.firstChild;
    expect(heroContainer).toHaveStyle('cursor: not-allowed');
    expect(heroContainer).toHaveStyle('background-color: #e0e0e0');
  });
});