export interface DropdownProps {
  options: string[];
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
}
