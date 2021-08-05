import Logo from '../../components/logo';
import Button from '../../components/button';

import './home.css';

const Home: React.FC = () => {
  return (
    <div className="Home_container">
      <section className="Home_section Home_main-section">
        <nav className="Home_nav">
          <Logo />
          <ul className="Home_nav-list">
            <Button
              buttonText="Quero participar"
              buttonColor="#00e88f"
              buttonTextColor="#000"
            />
            <li>
              <Button
                buttonText="Entrar"
                buttonColor="#000"
                buttonTextColor="#fff"
              />
            </li>
          </ul>
        </nav>
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
      <section className="Home_section Home_benefits-section" />
      <section className="Home_section Home_get-to-know-section" />
      <section className="Home_section Home_social-proof-section" />
      <section className="Home_section Home_last-call-section" />
      <section className="Home_section Home_screen-footer-section" />
    </div>
  );
};

export default Home;
