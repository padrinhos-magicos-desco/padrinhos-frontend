import { useState } from 'react';
import './dropdown.css';

type Props = {
  handleChange: (inputValue: string) => void;
};

const Dropdown: React.FC<Props> = ({ handleChange }: Props) => {
  const [value, setValue] = useState('');
  const handleOnChange = (inputValue: string) => {
    setValue(inputValue);
    handleChange(inputValue);
  };

  return (
    <select
      className="dropdown"
      value={value}
      onChange={(e) => handleOnChange(e.target.value)}
    >
      <option value="">Escolha aqui</option>
      <option value="Administração">Administração</option>
      <option value="Análise e Desenvolvimento de Sistemas">
        Análise e Desenvolvimento de Sistemas
      </option>
      <option value="Ciências Contábeis">Ciências Contábeis</option>
      <option value="Engenharia da Computação">Engenharia da Computação</option>
      <option value="Gestão Financeira">Gestão Financeira</option>
      <option value="Logística">Logística</option>
      <option value="Marketing">Marketing</option>
      <option value="Pedagogia">Pedagogia</option>
      <option value="Recursos Humanos">Recursos Humanos</option>
      <option value="Sistemas da Informação">Sistemas da Informação</option>
    </select>
  );
};

export default Dropdown;
