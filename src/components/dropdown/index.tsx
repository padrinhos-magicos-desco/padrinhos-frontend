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
      <option value="adm">Administração</option>
      <option value="ads">Análise e Desenvolvimento de Sistemas</option>
      <option value="cc">Ciências Contábeis</option>
      <option value="ec">Engenharia da Computação</option>
      <option value="gf">Gestão Financeira</option>
      <option value="log">Logística</option>
      <option value="mkt">Marketing</option>
      <option value="ped">Pedagogia</option>
      <option value="rh">Recursos Humanos</option>
      <option value="si">Sistemas da Informação</option>
    </select>
  );
};

export default Dropdown;
