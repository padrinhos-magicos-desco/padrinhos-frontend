import './testimonial-card.css';

type Props = {
  name: string;
  subtitle: string;
  testimonial: string;
  image?: string;
};

const FALLBACK_IMAGE = '/testimonial-image.png';

const TestimonialsCard: React.FC<Props> = ({
  name,
  subtitle,
  testimonial,
  image,
}: Props) => {
  return (
    <div className="Testimonials-card_container">
      <img src={image} alt="" />
      <div className="Testimonials-card_testimonial-info">
        <h3 className="Testimonials-card-title">{name}</h3>
        <p className="Testimonials-card-subtitle">{subtitle}</p>
        <p className="Testimonials-card-testimonial">{`"${testimonial}"`}</p>
      </div>
    </div>
  );
};

TestimonialsCard.defaultProps = {
  image: FALLBACK_IMAGE,
};

export default TestimonialsCard;
