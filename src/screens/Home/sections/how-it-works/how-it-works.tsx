import CTACard from '../../../../components/cta-card';

import './how-it-works.css';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="quero-participar" className="HowItWorks_container">
      <div className="HowItWork_title">Um título sobre como funciona.</div>
      <div className="HowItWork_card-container">
        <CTACard
          title="Padrinho"
          subtitle="O que acontece, com quem, onde etc. Pq é bom ser padrinho"
          topics={[
            'O que eu ganho com isso',
            'O que eu ganho com isso',
            'O que eu ganho com isso',
            'O que eu ganho com isso',
            'O que eu ganho com isso',
          ]}
          buttonText="Quero apadrinhar alguém"
          buttonUrl="/padrinho/cadastro"
          showStamp
        />
        <CTACard
          title="Apadrinhado"
          subtitle="O que acontece, com quem, onde etc. Pq é bom ser padrinho"
          topics={[
            'O que eu ganho com isso',
            'O que eu ganho com isso',
            'O que eu ganho com isso',
            'O que eu ganho com isso',
            'O que eu ganho com isso',
          ]}
          buttonText="Quero ter um padrinho"
          buttonUrl="/apadrinhado/cadastro"
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;
