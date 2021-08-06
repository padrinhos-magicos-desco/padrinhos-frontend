import RegisterBox from '../../components/register-box';
import Button from '../../components/button';
import Logo from '../../components/logo';

import './sponsored.css';

const Sponsored: React.FC = () => {
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
            url="/screen/100"
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
        <p className="Sponsored_p">
          Olá! Todo mundo quer saber, como te chamamos?
        </p>
      </RegisterBox>
      <RegisterBox
        imageUrl="/register-headset-image.png"
        onContinue={() => null}
      >
        <p className="Sponsored_p">XPTO</p>
      </RegisterBox>
    </div>
  );
};

export default Sponsored;
