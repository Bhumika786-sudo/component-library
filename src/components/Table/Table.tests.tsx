import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';

describe('Table Component', () => {
  test('renders table and is visible', () => {
    render(
      <Table 
        headers={['Name', 'Age']} 
        rows={[['John', '30']]} 
      />
    );
    const headerElement = screen.getByText(/Name/i);
    expect(headerElement).toBeVisible();
  });

  test('table changes style when disabled', () => {
    const { container } = render(
      <Table 
        headers={['Name', 'Age']} 
        rows={[['John', '30']]} 
        disabled={true}
      />
    );
    const table = container.querySelector('table');
    expect(table).toHaveStyle('cursor: not-allowed');
    expect(table).toHaveStyle('background-color: #f5f5f5');
  });
});