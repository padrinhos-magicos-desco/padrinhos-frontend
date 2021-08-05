import CTACard from '../../../../components/cta-card';

import './how-it-works.css';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="HowItWorks_container">
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
          showStamp
        />
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
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;
