import { RouteComponentProps } from 'react-router-dom';

import Input from '../../components/input';
import Button from '../../components/button';
import Logo from '../../components/logo';

import './login.css';

type TParams = { id: string };
type Props = RouteComponentProps<TParams>;

const Login: React.FC<Props> = ({ match }: Props) => {
  return (
    <>
      <div className="Login_container">
        <div className="Login_content">
          <Logo />
          <Input placeholder="E-mail" type="email" handleChange={() => {}} />
          <Input placeholder="Senha" type="password" handleChange={() => {}} />
          <Button buttonText="Entrar" url="" />
        </div>
      </div>
    </>
  );
};

export default Login;
