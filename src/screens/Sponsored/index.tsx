import { useState } from 'react';

import RegisterBox from '../../components/register-box';
import Button from '../../components/button';
import Logo from '../../components/logo';
import Input from '../../components/input';
import Dropdown from '../../components/dropdown';

import './sponsored.css';

const Sponsored: React.FC = () => {
  const [nameValue, setNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [courseValue, setCourseValue] = useState('');

  const handleNameInputChange = (value: string) => {
    setNameValue(value);
  };
  const handleLastNameInputChange = (value: string) => {
    setLastNameValue(value);
  };
  const handleEmailInputChange = (value: string) => {
    setEmailValue(value);
  };
  const handlePhoneInputChange = (value: string) => {
    setPhoneValue(value);
  };
  const handleCourseInputChange = (value: string) => {
    setCourseValue(value);
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
          <div className="Sponsored_inputs">
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
        <>
          <p className="Sponsored_p">Como entramos em contato com você?</p>
          <div className="Sponsored_inputs">
            <Input
              placeholder="E-mail"
              type="email"
              handleChange={handleEmailInputChange}
            />
            <Input
              placeholder="Telefone"
              type="tel"
              handleChange={handlePhoneInputChange}
            />
          </div>
        </>
      </RegisterBox>
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={() => null}
      >
        <>
          <p className="Sponsored_p">Qual curso você gostaria de fazer?</p>
          <div className="Sponsored_dropdown">
            <Dropdown handleChange={handleCourseInputChange} />
          </div>
        </>
      </RegisterBox>
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={() => null}
      >
        <>
          <p>
            nome: {nameValue} {lastNameValue}
          </p>
          <p>email: {emailValue}</p>
          <p>telefone: {phoneValue}</p>
          <p>curso: {courseValue}</p>
        </>
      </RegisterBox>
    </div>
  );
};

export default Sponsored;
