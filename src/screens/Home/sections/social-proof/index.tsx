import TestimonialCard from '../../../../components/testimonial-card';
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
    </section>
  );
};

export default SocialProof;
