import RegisterBox from '../../components/register-box';
import ShareButtons from '../../components/share-buttons';

import './sandbox.css';

const Sandbox: React.FC = () => {
  return (
    <>
      <RegisterBox
        imageUrl="register-headset-image.png"
        onContinue={() => null}
      >
        <>
          <p className="Sandbox_p">
            Olá! Todo mundo quer saber, como te chamamos?
          </p>
          <ShareButtons shareText="Confira aqui!" />
        </>
      </RegisterBox>
    </>
  );
};

export default Sandbox;
