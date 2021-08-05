import { useState } from 'react';
import './input.css';

type Props = {
  placeholder: string;
  type: string;
  handleChange: (inputValue: string) => void;
};

const Input: React.FC<Props> = ({ placeholder, type, handleChange }: Props) => {
  const [value, setValue] = useState('');
  const handleOnChange = (inputValue: string) => {
    setValue(inputValue);
    handleChange(inputValue);
  };

  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleOnChange(e.target.value)}
    />
  );
};

export default Input;
