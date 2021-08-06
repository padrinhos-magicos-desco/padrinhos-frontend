import Button from '../../../../components/button';

import './last-call.css';

const LastCall: React.FC = () => {
  return (
    <section>
      <div className="LastCall_container">
        <h1>Não perca a oportunidade de se conectar com quem sabe ensinar.</h1>
        <div className="LastCall_subtitle">
          <p>Inscreva-se e crie com a gente um futuro melhor pra educação.</p>
        </div>
        <Button
          buttonText="Quero participar"
          buttonColor="#00e88f"
          borderColor="#00e88f"
          buttonTextColor="#000"
          url="/#quero-participar"
        />
      </div>
    </section>
  );
};

export default LastCall;
