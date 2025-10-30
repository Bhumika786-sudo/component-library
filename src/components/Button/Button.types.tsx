export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  size?: 'small' | 'medium' | 'large';
}
