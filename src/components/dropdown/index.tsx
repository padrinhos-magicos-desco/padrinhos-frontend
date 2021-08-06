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
      <option value="Administração">
        Faculdade Descomplica - Faculdade Descomplica - Administração
      </option>
      <option value="Análise e Desenvolvimento de Sistemas">
        Faculdade Descomplica - Análise e Desenvolvimento de Sistemas
      </option>
      <option value="Ciências Contábeis">
        Faculdade Descomplica - Ciências Contábeis
      </option>
      <option value="Engenharia da Computação">
        Faculdade Descomplica - Engenharia da Computação
      </option>
      <option value="Gestão Financeira">
        Faculdade Descomplica - Gestão Financeira
      </option>
      <option value="Logística">Faculdade Descomplica - Logística</option>
      <option value="Marketing">Faculdade Descomplica - Marketing</option>
      <option value="Pedagogia">Faculdade Descomplica - Pedagogia</option>
      <option value="Recursos Humanos">
        Faculdade Descomplica - Recursos Humanos
      </option>
      <option value="Sistemas da Informação">
        Faculdade Descomplica - Sistemas da Informação
      </option>
      <option value="Pós em Apucuntura">Pós Descomplica - Apucuntura</option>
      <option value="Pós em Big Data">Pós Descomplica - Big Data</option>
      <option value="MBA em Inteligência de Mercado">
        Pós Descomplica - MBA em Inteligência de Mercado
      </option>
      <option value="MBA em Marketing">
        Pós Descomplica - MBA em Marketing
      </option>
    </select>
  );
};

export default Dropdown;
