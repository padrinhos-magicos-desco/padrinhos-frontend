import TestimonialCard from '../../components/testimonial-card';
import Testimonials from '../../components/testimonials';

import './sandbox.css';

const Sandbox: React.FC = () => {
  return (
    <>
      <TestimonialCard
        name="Gabriel Maia"
        subtitle="Faculdade Descomplica"
        testimonial="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <Testimonials
        testimonialList={[
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
        ]}
      />
    </>
  );
};

export default Sandbox;
