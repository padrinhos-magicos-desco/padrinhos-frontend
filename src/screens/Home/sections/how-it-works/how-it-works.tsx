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
            '1) Cadastre- se',
            '2) Escolha o quanto quer doar',
            '3) Escolha a história que quer mudar ',
            '4) Pronto, você está fazendo a diferença! ',
            '5) Compartilhe com amigos',
          ]}
          buttonText="Quero apadrinhar alguém"
          buttonUrl="/padrinho/cadastro"
          showStamp
        />
        <CTACard
          title="Apadrinhado"
          subtitle="O que acontece, com quem, onde etc. Pq é bom ser padrinho"
          topics={[
            '1) Cadastre- se',
            '2) Escolha o quanto quer doar',
            '3) Escolha a história que quer mudar ',
            '4) Pronto, você está fazendo a diferença! ',
            '5) Compartilhe com amigos',
          ]}
          buttonText="Quero ter um padrinho"
          buttonUrl="/apadrinhado/cadastro"
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;
