import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

interface StyledTableProps {
  disabled?: boolean;
  backgroundColor?: string;
}

interface TableHeaderProps {
  disabled?: boolean;
  headerBackgroundColor?: string;
  textColor?: string;
}

interface TableRowProps {
  disabled?: boolean;
}

interface TableCellProps {
  disabled?: boolean;
  textColor?: string;
}

interface TableFooterProps {
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledTable = styled.table<StyledTableProps>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props: StyledTableProps) => props.disabled ? '#f5f5f5' : props.backgroundColor || '#ffffff'};
  opacity: ${(props: StyledTableProps) => props.disabled ? 0.6 : 1};
  cursor: ${(props: StyledTableProps) => props.disabled ? 'not-allowed' : 'default'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const TableHeader = styled.th<TableHeaderProps>`
  background-color: ${(props: TableHeaderProps) => props.disabled ? '#d0d0d0' : props.headerBackgroundColor || '#007bff'};
  color: ${(props: TableHeaderProps) => props.textColor || '#ffffff'};
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
  font-weight: bold;
`;

const TableRow = styled.tr<TableRowProps>`
  &:nth-child(even) {
    background-color: ${(props: TableRowProps) => props.disabled ? '#e8e8e8' : '#f9f9f9'};
  }

  &:hover {
    background-color: ${(props: TableRowProps) => props.disabled ? 'inherit' : '#f1f1f1'};
  }
`;

const TableCell = styled.td<TableCellProps>`
  padding: 12px;
  border: 1px solid #ddd;
  color: ${(props: TableCellProps) => props.disabled ? '#999999' : props.textColor || '#333333'};
`;

const TableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${(props: TableFooterProps) => props.disabled ? '#e0e0e0' : props.backgroundColor || '#f0f0f0'};
  font-weight: bold;
`;

const Table: React.FC<TableProps> = ({ 
  headers, 
  rows, 
  footer, 
  disabled = false, 
  backgroundColor,
  headerBackgroundColor,
  textColor 
}) => {
  return (
    <StyledTable disabled={disabled} backgroundColor={backgroundColor}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <TableHeader 
              key={index} 
              disabled={disabled}
              headerBackgroundColor={headerBackgroundColor}
              textColor={textColor}
            >
              {header}
            </TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex} disabled={disabled}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex} disabled={disabled} textColor={textColor}>
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
      {footer && (
        <TableFooter disabled={disabled} backgroundColor={backgroundColor}>
          <tr>
            {footer.map((cell, index) => (
              <TableCell key={index} disabled={disabled} textColor={textColor}>
                {cell}
              </TableCell>
            ))}
          </tr>
        </TableFooter>
      )}
    </StyledTable>
  );
};

export default Table;