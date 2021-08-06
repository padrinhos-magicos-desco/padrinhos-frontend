import TestimonialCard from '../../../../components/testimonial-card';
import LogoExame from '../../../../components/logo-exame';
import LogoFast from '../../../../components/logo-fast';
import LogoFolha from '../../../../components/logo-folha';
import LogoForbes from '../../../../components/logo-forbes';
import LogoVeja from '../../../../components/logo-veja';
import './social-proof.css';

const SocialProof: React.FC = () => {
  return (
    <section className="SocialProof_container">
      <div className="SocialProof_title">
        Depoimentos dos nossos apadrinhados:
      </div>
      <div className="SocialProof_testimonials">
        <TestimonialCard
          name="João Souza"
          subtitle="Faculdade Descomplica"
          testimonial="Sem meu padrinho, não teria tido a chance de estudar o que sempre quis"
          image="/pessoa2.png"
        />
        <TestimonialCard
          name="Márcia Silva"
          subtitle="Pós Graduação Descomplica"
          testimonial="“Após ter largado tudo pra cuidar dos meus filhos, meu padrinho me deu a oportunidade de seguir um sonho antigo: estudar de novo”"
          image="/pessoa1.png"
        />
        <TestimonialCard
          name="Marco"
          subtitle="Faculdade Descomplica"
          testimonial="Me conectar com o mercado de trabalho ficou mais fácil com meu padrinho"
          image="/pessoa3.png"
        />
      </div>
      <div className="SocialProof_companies">
        <p>
          ”Umas das empresas mais inovadoras da América Latina por levar
          educação online para massas.”
        </p>
        <div className="SocialProof_companiesList">
          <LogoFast />
          <LogoForbes />
          <LogoExame />
          <LogoVeja />
          <LogoFolha />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
