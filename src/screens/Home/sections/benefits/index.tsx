import './benefits.css';

const BenefitsSection: React.FC = () => {
  return (
    <div className="Benefits_container">
      <div className="Benefits_title">
        Como a gente pode <u>impactar a vida e cenário</u> brasileiro?
      </div>
      <div className="Benefits_list">
        <div className="Benefits_item">
          <h1>1.</h1>
          <h2>Vantagem para o Apadrinhado</h2>
          <p>
            Cronograma do zero pensado para quem ainda não iniciou os estudos
            para o Enem e outros vestibulares.
          </p>
        </div>
        <div className="Benefits_item">
          <h1>2.</h1>
          <h2>Vantagem para o Padrinho</h2>
          <p>
            Receba dois cursos exclusivos com foco em: produtividade nos estudos
            e nivelamento em matemática básica.
          </p>
        </div>
        <div className="Benefits_item">
          <h1>3.</h1>
          <h2>Vantagem para o Brasil</h2>
          <p>
            Desconte o valor da inscrição do Enem (85 reais) na última turma do
            ano, começando do zero até o Enem 2021.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
