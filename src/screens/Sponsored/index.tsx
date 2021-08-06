import { useState } from 'react';

import Database from '../../gateways/database';
import SponsoredModel from '../../domain/sponsored';

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
  const [myMomentTextValue, setMyMomentTextValue] = useState('');
  const [biographyValue, setBiographyValue] = useState('');
  const [incomeValue, setIncomeValue] = useState('');
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
  const handleCourseInputChange = (value: string) => {
    setCourseValue(value);
  };
  const handleMyMomentTextChange = (value: string) => {
    setMyMomentTextValue(value);
  };
  const handleBiographyTextAreaChange = (value: string) => {
    setBiographyValue(value);
  };
  const handleIncomeInputChange = (value: string) => {
    setIncomeValue(value);
  };
  const handlePasswordInputChange = (value: string) => {
    setPasswordValue(value);
  };

  const handleContinue = () => {
    if (step === 7) {
      const sponsored = new SponsoredModel(
        nameValue,
        lastNameValue,
        emailValue,
        passwordValue,
        phoneValue,
        courseValue,
        myMomentTextValue,
        incomeValue,
        biographyValue
      );

      const db = Database.getDatabase();
      db.addSponsored(sponsored);
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
        disabled={!courseValue}
      >
        <>
          <p className="Sponsored_p">Qual curso você gostaria de fazer?</p>
          <div className="Sponsored_dropdown">
            <Dropdown handleChange={handleCourseInputChange} />
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
        disabled={!myMomentTextValue}
      >
        <>
          <p className="Sponsored_p">
            Conta pra gente: como está seu momento agora?
          </p>
          <div className="Sponsored_textarea-container">
            <textarea
              className="Sponsored_textarea"
              rows={8}
              cols={100}
              onChange={(e) => handleMyMomentTextChange(e.target.value)}
            />
          </div>
        </>
      </RegisterBox>
    );
  };

  const renderStep5 = () => {
    if (step !== 5) {
      return null;
    }

    return (
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={handleContinue}
        disabled={!incomeValue}
      >
        <>
          <p className="Sponsored_p">Pergunta sobre a renda familiar dele</p>
          <div className="Sponsored_inputs">
            <Input
              placeholder="Renda familiar em reais"
              type="text"
              handleChange={handleIncomeInputChange}
            />
          </div>
        </>
      </RegisterBox>
    );
  };

  const renderStep6 = () => {
    if (step !== 6) {
      return null;
    }

    return (
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={handleContinue}
        disabled={!biographyValue}
      >
        <>
          <p className="Sponsored_p">Pergunta sobre a história de vida dele</p>
          <div className="Sponsored_textarea-container">
            <textarea
              className="Sponsored_textarea"
              rows={8}
              cols={100}
              onChange={(e) => handleBiographyTextAreaChange(e.target.value)}
            />
          </div>
        </>
      </RegisterBox>
    );
  };

  const renderStep7 = () => {
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
          <p className="Sponsored_p">Para finalizarmos, insira uma senha</p>
          <div className="Sponsored_inputs">
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
    <div className="Sponsored_container">
      <div className="Sponsored_header">
        <Logo />
        <nav className="Sponsored_buttons">
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
      {renderStep6()}
      {renderStep7()}
    </div>
  );
};

export default Sponsored;
