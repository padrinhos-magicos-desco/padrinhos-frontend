import RegisterBox from '../../components/register-box';

import './sandbox.css';

const Sandbox: React.FC = () => {
  return (
    <>
      <RegisterBox
        imageUrl="register-headset-image.png"
        onContinue={() => {
          console.log('teste');
        }}
      >
        <p className="Sandbox_p">
          Olá! Todo mundo quer saber, como te chamamos?
        </p>
      </RegisterBox>
    </>
  );
};

export default Sandbox;
