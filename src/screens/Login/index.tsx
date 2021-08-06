import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Sponsor from '../../domain/sponsor';
import Sponsored from '../../domain/sponsored';
import Database from '../../gateways/database';
import Input from '../../components/input';
import Button from '../../components/button';
import Logo from '../../components/logo';

import './login.css';

type TParams = { id: string };
type Props = RouteComponentProps<TParams>;

const LoginScreen: React.FC<Props> = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailValueChange = (value: string) => {
    setEmailValue(value);
  };
  const handlePasswordValueChange = (value: string) => {
    setPasswordValue(value);
  };

  const handleLogin = () => {
    const db = Database.getDatabase();
    const user = db.getLogin(emailValue, passwordValue);

    if (user && user instanceof Sponsor) {
      localStorage.setItem('userLogged', JSON.stringify(user));
      window.location.href = '/padrinho';
      return null;
    }

    if (user && user instanceof Sponsored) {
      localStorage.setItem('userLogged', JSON.stringify(user));
      window.location.href = '/apadrinhado';
      return null;
    }

    setErrorMessage('Dados informados são inválidos');

    return null;
  };

  return (
    <>
      <div className="Login_container">
        <div className="Login_content">
          <Logo />
          <Input
            placeholder="E-mail"
            type="email"
            handleChange={handleEmailValueChange}
          />
          <Input
            placeholder="Senha"
            type="password"
            handleChange={handlePasswordValueChange}
          />
          <p className="Login_error-message">{errorMessage}</p>
          <Button buttonText="Entrar" onClick={handleLogin} />
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
