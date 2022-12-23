export type ChangeHandler = (event: {
  target: any;
  type?: any;
}) => void | Promise<void | boolean>;

export interface SelectOption {
  key: string;
  value: string;
  label: string;
  secondaryLabel?: string;
}

export interface SelectItem {
  value: string | number | null;
  label: string;
}

export interface SelectProps {
  label?: string;
  options: SelectOption[];
  selectedValue?: string;
  error?: string;
  onSelect: (value: string, option: SelectOption) => void;
}

export interface DropdownItem {
  value: string;
  label: string;
  group?: string;
}
