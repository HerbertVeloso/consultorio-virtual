import { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { StyledDatePicker } from './styles';

interface InputDateProps extends ReactDatePickerProps {
  placeholder?: string;
  selected?: Date | null;
  onChange(data: Date | null): void;
}

export function InputDate({ placeholder, selected, onChange, ...rest }: InputDateProps) {
  return (
    <div>
      <StyledDatePicker
        placeholderText={placeholder}
        selected={selected}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        {...rest}
      />
    </div>
  );
}
