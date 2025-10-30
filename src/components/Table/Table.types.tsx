export interface TableProps {
  headers: string[];
  rows: string[][];
  footer?: string[];
  disabled?: boolean;
  backgroundColor?: string;
  headerBackgroundColor?: string;
  textColor?: string;
}
