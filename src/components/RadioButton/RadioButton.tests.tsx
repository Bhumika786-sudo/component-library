import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  test('renders radio button and is visible', () => {
    render(<RadioButton label="Test Radio" name="test" value="test" />);
    const radioElement = screen.getByLabelText(/Test Radio/i);
    expect(radioElement).toBeVisible();
  });

  test('radio button changes style when disabled', () => {
    render(
      <RadioButton
        label="Disabled Radio"
        name="test"
        value="test"
        disabled={true}
      />
    );
    const radioElement = screen.getByLabelText(/Disabled Radio/i);
    expect(radioElement).toBeDisabled();
    expect(radioElement).toHaveStyle('cursor: not-allowed');
  });
});
