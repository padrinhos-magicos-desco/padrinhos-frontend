import Button from '../../../../components/button';
import Logo from '../../../../components/logo';

import './main.css';

const MainSection: React.FC = () => {
  return (
    <section className="Main_section">
      <div className="Main_header">
        <Logo />
        <nav className="Main_buttons">
          <Button
            buttonText="Quero participar"
            buttonColor="#00e88f"
            borderColor="#00e88f"
            buttonTextColor="#000"
            url="/#quero-participar"
          />
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
      <div className="Main_content">
        <div className="Main_main-text">
          <h1 className="Main_h1">O FUTURO DA EDUCAÇÃO PASSA PRO VOCÊ</h1>
          <h2 className="Main_h2">
            Conheça nosso programa de apadrinhamento, tanto para quem pode
            ajudar, quanto pra quem precisa de ajuda
          </h2>
        </div>
        <img alt="" className="Main_image" src="/main-people.png" />
      </div>
    </section>
  );
};

export default MainSection;
