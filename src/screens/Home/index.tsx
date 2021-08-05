import Logo from '../../components/logo';
import Button from '../../components/button';
import Benefits from './sections/benefits';

import './home.css';

const Home: React.FC = () => {
  return (
    <div className="Home_container">
      <section className="Home_section Home_main-section">
        <div className="Home_header">
          <Logo />
          <nav className="Home_buttons">
            <Button
              buttonText="Quero participar"
              buttonColor="#00e88f"
              borderColor="#00e88f"
              buttonTextColor="#000"
            />
            <Button
              buttonText="Entrar"
              buttonColor="#000"
              borderColor="#fff"
              buttonTextColor="#fff"
            />
          </nav>
        </div>
        <div className="Home_content">
          <div className="Home_main-text">
            <h1 className="Home_h1">PADRINHOS MÁGICOS ATIVAR!</h1>
            <h2 className="Home_h2">
              Um subtítulo que contextualize o rolê do apadrinhamento e como
              isso é importante para a educação. Que somos uma empresa foda pra
              caralho e vamos mudar a educação do mundo.
            </h2>
          </div>
          <div className="Home_image">imagem</div>
        </div>
      </section>
      <section className="Home_section Home_secondary-section" />
      <section className="Home_section Home_benefits-section">
        <Benefits />
      </section>
      <section className="Home_section Home_get-to-know-section" />
      <section className="Home_section Home_social-proof-section" />
      <section className="Home_section Home_last-call-section" />
      <section className="Home_section Home_screen-footer-section" />
    </div>
  );
};

export default Home;
