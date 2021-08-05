import Button from '../../../../components/button';
import Logo from '../../../../components/logo';

const MainSection: React.FC = () => {
  return (
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
            useBorder
          />
        </nav>
      </div>
      <div className="Home_content">
        <div className="Home_main-text">
          <h1 className="Home_h1">PADRINHOS MÁGICOS ATIVAR!</h1>
          <h2 className="Home_h2">
            Um subtítulo que contextualize o rolê do apadrinhamento e como isso
            é importante para a educação. Que somos uma empresa foda pra caralho
            e vamos mudar a educação do mundo.
          </h2>
        </div>
        <div className="Home_image">imagem</div>
      </div>
    </section>
  );
};

export default MainSection;
