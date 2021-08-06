import { useState } from 'react';

import RegisterBox from '../../components/register-box';
import Button from '../../components/button';
import Logo from '../../components/logo';
import Input from '../../components/input';

import './sponsored.css';

const Sponsored: React.FC = () => {
  const [nameValue, setNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');

  const handleNameInputChange = (value: string) => {
    setNameValue(value);
  };
  const handleLastNameInputChange = (value: string) => {
    setLastNameValue(value);
  };

  return (
    <div className="Sponsored_container">
      <div className="Sponsored_header">
        <Logo />
        <nav className="Sponsored_buttons">
          <Button
            buttonText="Quero participar"
            buttonColor="#00e88f"
            borderColor="#00e88f"
            buttonTextColor="#000"
            url="/apadrinhado/register"
          />
          <Button
            buttonText="Entrar"
            buttonColor="#000"
            borderColor="#fff"
            buttonTextColor="#fff"
            useBorder
            url="/screen/100"
          />
        </nav>
      </div>
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={() => null}
      >
        <>
          <p className="Sponsored_p">
            Olá! Todo mundo quer saber, como te chamamos?
          </p>
          <div className="Sponsored_name">
            <Input
              placeholder="Nome"
              type="text"
              handleChange={handleNameInputChange}
            />
            <Input
              placeholder="Sobrenome"
              type="text"
              handleChange={handleLastNameInputChange}
            />
          </div>
        </>
      </RegisterBox>
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={() => null}
      >
        <p className="Sponsored_p">
          nome: {nameValue} {lastNameValue}
        </p>
      </RegisterBox>
    </div>
  );
};

export default Sponsored;
