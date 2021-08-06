import { useState } from 'react';

import Database from '../../../gateways/database';
import SponsorModel, { SponsorType } from '../../../domain/sponsor';

import RegisterBox from '../../../components/register-box';
import Button from '../../../components/button';
import Logo from '../../../components/logo';
import Input from '../../../components/input';
import SliderInput from '../../../components/slider-input';

import './sponsor.css';

const SponsorScreen: React.FC = () => {
  const [nameValue, setNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [documentValue, setDocumentValue] = useState('');
  const [investmentRangeValue, setInvestmentRangeValue] = useState(100);
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
  const handleInvestmentRangeValueChange = (value: number) => {
    setInvestmentRangeValue(value);
  };

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
        '1000'
        // investmentRangeValue
      );

      const db = Database.getDatabase();
      db.addSponsor(sponsor);

      db.serializeDB();
    }
    setStep(step + 1);
  };

  const renderNameStep = () => {
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
              key="name"
              placeholder="Nome"
              type="text"
              handleChange={handleNameInputChange}
            />
            <Input
              key="lastname"
              placeholder="Sobrenome"
              type="text"
              handleChange={handleLastNameInputChange}
            />
          </div>
        </>
      </RegisterBox>
    );
  };

  const renderEmailPhoneStep = () => {
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
              key="email"
              placeholder="E-mail"
              type="email"
              handleChange={handleEmailInputChange}
            />
            <Input
              key="phone"
              placeholder="Telefone"
              type="tel"
              handleChange={handlePhoneInputChange}
            />
          </div>
        </>
      </RegisterBox>
    );
  };

  const renderDocumentStep = () => {
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
              key="cpf"
              placeholder="CPF ou CNPJ"
              type="cpf"
              handleChange={handleDocumentInputChange}
            />
          </div>
        </>
      </RegisterBox>
    );
  };

  const renderInvestmentRangeStep = () => {
    return (
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={handleContinue}
        disabled={!investmentRangeValue}
      >
        <>
          <p className="Sponsor_p">Até quanto você deseja investir?</p>
          <div className="Sponsor_slider-container">
            <div className="Sponsor_slider">
              <SliderInput
                onChange={handleInvestmentRangeValueChange}
                min={300}
                max={10000}
                currentIndex={investmentRangeValue}
              />
              <p className="Sponsor_slider-label">R$ {investmentRangeValue}</p>
            </div>
          </div>
        </>
      </RegisterBox>
    );
  };

  const renderPasswordStep = () => {
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
              key="senha"
              placeholder="Senha"
              type="password"
              handleChange={handlePasswordInputChange}
            />
          </div>
        </>
      </RegisterBox>
    );
  };

  const renderCheckoutStep = () => {
    return (
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={handleContinue}
        disabled={false}
      >
        <>
          <p className="Sponsor_p">Efetue seu pagamento</p>
          <div className="Sponsor_checkout-inputs Sponsor_checkout-fullsize-inputs">
            <Input
              key="cardNumber"
              placeholder="Número do cartão"
              type="text"
              handleChange={() => {}}
            />
          </div>
          <div className="Sponsor_checkout-inputs Sponsor_checkout-fullsize-inputs">
            <Input
              key="cardHolderName"
              placeholder="Nome como no cartão"
              type="text"
              handleChange={() => {}}
            />
          </div>
          <div className="Sponsor_checkout-inputs">
            <Input
              key="cardExpireDate"
              placeholder="MM/AA"
              type="text"
              handleChange={() => {}}
            />
            <Input
              key="cardCVV"
              placeholder="Cód. de segurança"
              type="text"
              handleChange={() => {}}
            />
          </div>
        </>
      </RegisterBox>
    );
  };

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return renderNameStep();
      case 2:
        return renderEmailPhoneStep();
      case 3:
        return renderPasswordStep();
      case 4:
        return renderDocumentStep();
      case 5:
        return renderInvestmentRangeStep();
      case 6:
        return renderCheckoutStep();
      default:
        return null;
    }
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
            url="/apadrinhado/cadastro"
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
      {renderCurrentStep()}
    </div>
  );
};

export default SponsorScreen;
