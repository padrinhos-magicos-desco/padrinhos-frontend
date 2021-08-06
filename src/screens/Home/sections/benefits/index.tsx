import './benefits.css';

const BenefitsSection: React.FC = () => {
  return (
    <section>
      <div className="Benefits_container">
        <div className="Benefits_title">
          Como a gente pode <u>impactar a vida e cenário</u> brasileiro?
        </div>
        <div className="Benefits_list">
          <div className="Benefits_item">
            <h1>1.</h1>
            <h2>Vantagem para o Brasil</h2>
            <p>
              A plataforma padrinhos mágicos permite o aumento empregabilidade
              empregabilidade no país e (..)
            </p>
          </div>
          <div className="Benefits_item">
            <h1>2.</h1>
            <h2>Vantagem para o Apadrinhado</h2>
            <p>
              Escolha estudar! Escolha uma faculdade ou pós e através da sua
              história, receba apoio financeiro para essa jornada. Ter o ensino
              superior completo aumenta em média 182% sua renda e uma pós
              graduação em média 42%.
            </p>
          </div>
          <div className="Benefits_item">
            <h1>3.</h1>
            <h2>Vantagem para o Padrinho</h2>
            <p>
              Permita a escolha do estudo. Acompanhe a jornada de quem você
              ajudou e troque mensagens de motivação. Receba descontos especiais
              do Descomplica pra você ou para presentear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
