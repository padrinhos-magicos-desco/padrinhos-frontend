import { useState } from 'react';

import Database from '../../gateways/database';
import SponsorModel, { SponsorType } from '../../domain/sponsor';

import RegisterBox from '../../components/register-box';
import Button from '../../components/button';
import Logo from '../../components/logo';
import Input from '../../components/input';

import './sponsored.css';

const Sponsor: React.FC = () => {
  const [nameValue, setNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [documentValue, setDocumentValue] = useState('');
  // const [investmentRangeValue, setInvestmentRangeValue] = useState(100);
  const [passwordValue, setPasswordValue] = useState('');

  const [step, setStep] = useState(1);

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
  const handleDocumentInputChange = (value: string) => {
    setDocumentValue(value);
  };
  const handlePasswordInputChange = (value: string) => {
    setPasswordValue(value);
  };
  // const handleInvestmentRangeValueChange = (value: number) => {
  //   setInvestmentRangeValue(value);
  // };

  const handleContinue = () => {
    if (step === 7) {
      const sponsor = new SponsorModel(
        nameValue,
        lastNameValue,
        emailValue,
        passwordValue,
        phoneValue,
        documentValue.length > 11 ? SponsorType.Company : SponsorType.Person,
        documentValue,
        1000
        // investmentRangeValue
      );

      const db = Database.getDatabase();
      db.addSponsor(sponsor);
    }
    setStep(step + 1);
  };

  const renderStep1 = () => {
    if (step !== 1) {
      return null;
    }

    return (
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={handleContinue}
        disabled={!nameValue || !lastNameValue}
      >
        <>
          <p className="Sponsor_p">
            Olá! Todo mundo quer saber, como te chamamos?
          </p>
          <div className="Sponsor_inputs">
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
    );
  };

  const renderStep2 = () => {
    if (step !== 2) {
      return null;
    }

    return (
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={handleContinue}
        disabled={!emailValue || !phoneValue}
      >
        <>
          <p className="Sponsor_p">Como entramos em contato com você?</p>
          <div className="Sponsor_inputs">
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
    );
  };

  const renderStep3 = () => {
    if (step !== 3) {
      return null;
    }

    return (
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={handleContinue}
        disabled={documentValue.length < 11}
      >
        <>
          <p className="Sponsor_p">Qual curso você gostaria de fazer?</p>
          <div className="Sponsor_dropdown">
            <Input
              placeholder="CPF ou CNPJ"
              type="cpf"
              handleChange={handleDocumentInputChange}
            />
          </div>
        </>
      </RegisterBox>
    );
  };

  const renderStep4 = () => {
    if (step !== 4) {
      return null;
    }

    return (
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={handleContinue}
        // disabled={!investmentRangeValue}
      >
        <>
          <p className="Sponsor_p">Até quanto você deseja investir?</p>
        </>
      </RegisterBox>
    );
  };

  const renderStep5 = () => {
    if (step !== 7) {
      return null;
    }

    return (
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={handleContinue}
        disabled={!passwordValue}
      >
        <>
          <p className="Sponsor_p">Para finalizarmos, insira uma senha</p>
          <div className="Sponsor_inputs">
            <Input
              placeholder="Senha"
              type="password"
              handleChange={handlePasswordInputChange}
            />
          </div>
        </>
      </RegisterBox>
    );
  };

  return (
    <div className="Sponsor_container">
      <div className="Sponsor_header">
        <Logo />
        <nav className="Sponsor_buttons">
          {/* <Button
            buttonText="Quero participar"
            buttonColor="#00e88f"
            borderColor="#00e88f"
            buttonTextColor="#000"
            url="/apadrinhado/register"
          /> */}
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
      {renderStep1()}
      {renderStep2()}
      {renderStep3()}
      {renderStep4()}
      {renderStep5()}
    </div>
  );
};

export default Sponsor;