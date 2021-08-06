import { useState } from 'react';

import Database from '../../../gateways/database';
import SponsorModel, { SponsorType } from '../../../domain/sponsor';

import RegisterBox from '../../../components/register-box';
import Button from '../../../components/button';
import Logo from '../../../components/logo';
import Input from '../../../components/input';
import SliderInput from '../../../components/slider-input';
import Modal from '../../../components/modal';

import './sponsor.css';

const SponsorScreen: React.FC = () => {
  const [nameValue, setNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [documentValue, setDocumentValue] = useState('');
  const [investmentRangeValue, setInvestmentRangeValue] = useState(100);
  const [passwordValue, setPasswordValue] = useState('');
  const [shouldShowModal, setShouldShowConfirmationModal] = useState(false);

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
    if (step === 5) {
      setShouldShowConfirmationModal(true);
    }

    if (step === 6) {
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

      localStorage.setItem('userLogged', JSON.stringify(sponsor));
      window.location.href = '/padrinho';
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
          <h2 className="Sponsor_h2">
            Gostaríamos de saber um pouquinho mais de você
          </h2>
          <p className="Sponsor_p">
            Adoramos que está aqui! Parabéns pela sua iniciativa. Como podemos
            te chamar?
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
          <h2 className="Sponsor_h2">
            Precisamos saber um pouquinho mais de você
          </h2>
          <p className="Sponsor_p">
            Conta pra gente seu e-mail e telefone de contato
          </p>
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
          <h2 className="Sponsor_h2">
            Você que ajudar como Pessoa Física ou Jurídica?
          </h2>
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
          <h2 className="Sponsor_h2">Quanto você deseja investir?</h2>
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
          <h2 className="Sponsor_h2">Crie uma senha</h2>
          <p className="Sponsor_p">
            Com esse login, você vai poder acessar uma área onde terá contato
            com seus apadrinhados
          </p>
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

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return renderNameStep();
      case 2:
        return renderEmailPhoneStep();
      case 3:
        return renderDocumentStep();
      case 4:
        return renderPasswordStep();
      case 5:
        return renderInvestmentRangeStep();
      default:
        return null;
    }
  };

  const renderModal = () => {
    if (!shouldShowModal) return null;
    return (
      <Modal onCloseClick={() => setShouldShowConfirmationModal(false)}>
        <>
          <div className="Sponsor_modal-content">
            <h3 className="Sponsor_modal-title">Confirmação de compromisso</h3>
            <p className="Sponsor_modal-text">
              A partir desse momento, você se compromete a ajudar no futuro da
              educação no Brasil, formando novos profissionais para as mais
              diversas carreiras
            </p>
            <Button buttonText="Quero participar" onClick={handleContinue} />
          </div>
        </>
      </Modal>
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
      {renderModal()}
      {renderCurrentStep()}
    </div>
  );
};

export default SponsorScreen;
