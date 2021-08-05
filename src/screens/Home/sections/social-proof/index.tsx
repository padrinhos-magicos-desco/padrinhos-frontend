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
          testimonial={`"Um depoimento muito massa vem aqui dizendo o quanto ele é grato"`}
          image="/pessoa2.png"
        />
        <TestimonialCard
          name="Márcia Silva"
          subtitle="Pós Graduação Descomplica"
          testimonial={`"Um depoimento muito massa vem aqui dizendo o quanto ele é grato"`}
          image="/pessoa1.png"
        />
        <TestimonialCard
          name="Marco"
          subtitle="Faculdade Descomplica"
          testimonial={`"Um depoimento muito massa vem aqui dizendo o quanto ele é grato"`}
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
