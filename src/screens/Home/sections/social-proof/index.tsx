import Testimonials from '../../../../components/testimonials';
import './social-proof.css';

const mockedTestimonials = [
  {
    name: 'Busa',
    subtitle: 'Falcudade Descomplica',
    testimonial:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  {
    name: 'Busa',
    subtitle: 'Falcudade Descomplica',
    testimonial:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  {
    name: 'Busa',
    subtitle: 'Falcudade Descomplica',
    testimonial:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  {
    name: 'Busa',
    subtitle: 'Falcudade Descomplica',
    testimonial:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
  {
    name: 'Busa',
    subtitle: 'Falcudade Descomplica',
    testimonial:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  },
];

const SocialProof: React.FC = () => {
  return (
    <section className="SocialProof_container">
      <div className="SocialProof_title">
        Depoimentos dos nossos apadrinhados:
      </div>
      <Testimonials testimonialList={mockedTestimonials} />
    </section>
  );
};

export default SocialProof;
