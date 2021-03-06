import { useState } from 'react';

import Database from '../../../gateways/database';
import SponsoredModel from '../../../domain/sponsored';

import RegisterBox from '../../../components/register-box';
import Button from '../../../components/button';
import Logo from '../../../components/logo';
import Input from '../../../components/input';
import Dropdown from '../../../components/dropdown';
import ShareButtons from '../../../components/share-buttons';

import './sponsored.css';
import SliderInput from '../../../components/slider-input';

const SponsoredScreen: React.FC = () => {
  const [nameValue, setNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [courseValue, setCourseValue] = useState('');
  const [myMomentTextValue, setMyMomentTextValue] = useState('');
  const [biographyValue, setBiographyValue] = useState('');
  const [incomeValue, setIncomeValue] = useState(1000);
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
  const handleIncomeInputChange = (value: number) => {
    setIncomeValue(value);
  };
  const handlePasswordInputChange = (value: string) => {
    setPasswordValue(value);
  };

  const handleContinue = () => {
    if (step === 8) {
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

      db.serializeDB();

      localStorage.setItem('userLogged', JSON.stringify(sponsored));
      window.location.href = '/apadrinhado';
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
          <h2 className="Sponsored_h2">T?? precisando de uma for??a?</h2>
          <p className="Sponsored_p">
            Antes de tudo, a gente precisa saber: como te chamamos?
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
          <h2 className="Sponsored_h2">
            Precisamos saber um pouquinho mais de voc??
          </h2>
          <p className="Sponsored_p">Conta pra gente seu e-mail e telefone</p>
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
        disabled={!passwordValue}
      >
        <>
          <h2 className="Sponsored_h2">Crie uma senha</h2>
          <p className="Sponsored_p">
            Com esse login, voc?? vai poder acessar o status do apadrinhamento e
            se comunicar com seus padrinhos
          </p>
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

  const renderStep4 = () => {
    if (step !== 4) {
      return null;
    }

    return (
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={handleContinue}
        disabled={!courseValue}
      >
        <>
          <h2 className="Sponsored_h2">Qual curso voc?? pretende cursar?</h2>
          <p className="Sponsored_p">Precisamos saber como te alocar melhor</p>
          <div className="Sponsored_dropdown">
            <Dropdown handleChange={handleCourseInputChange} />
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
        disabled={!myMomentTextValue}
      >
        <>
          <h2 className="Sponsored_h2">
            Conta pra gente: como est?? seu momento agora?
          </h2>
          <p className="Sponsored_p">
            Fa??a um breve resumo contando sobre seu trabalho, estudos, carreira,
            etc.
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

  const renderStep6 = () => {
    if (step !== 6) {
      return null;
    }

    return (
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={handleContinue}
        disabled={!incomeValue}
      >
        <>
          <h2 className="Sponsored_h2">
            Qual ?? a renda mensal da sua fam??lia atualmente?
          </h2>
          <div className="Sponsor_slider-container">
            <div className="Sponsor_slider">
              <SliderInput
                onChange={handleIncomeInputChange}
                min={300}
                max={10000}
                currentIndex={incomeValue}
              />
              <p className="Sponsor_slider-label">R$ {incomeValue}</p>
            </div>
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
        disabled={!biographyValue}
      >
        <>
          <h2 className="Sponsored_h2">Quem ?? voc???</h2>
          <p className="Sponsored_p">
            Conte porque voc?? precisa desse apadrinhamento
          </p>
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

  const renderStep8 = () => {
    if (step !== 8) {
      return null;
    }

    return (
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={handleContinue}
        final
      >
        <>
          <h2 className="Sponsored_h2">
            Voc?? terminou de nos contar a sua hist??ria
          </h2>
          <div className="Sponsored_final">
            <p className="Sponsored_p">{biographyValue}</p>
            <ShareButtons shareText={biographyValue} />
            <button type="button" onClick={() => handleContinue()}>
              Ir para a plataforma
            </button>
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
          <Button
            buttonText="Entrar"
            buttonColor="#000"
            borderColor="#fff"
            buttonTextColor="#fff"
            useBorder
            url="/login"
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
      {renderStep8()}
    </div>
  );
};

export default SponsoredScreen;
