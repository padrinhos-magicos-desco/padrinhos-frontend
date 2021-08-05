import Slider from 'react-slick';
import TestimonialCard from '../testimonial-card';

import './testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type TestimonialType = {
  name: string;
  subtitle: string;
  testimonial: string;
  image?: string;
};

type Props = {
  testimonialList: Array<TestimonialType>;
};

const Testimonials: React.FC<Props> = ({ testimonialList }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="Testimonials_container">
      <Slider {...settings}>
        {testimonialList.map((tl) => {
          return <TestimonialCard key={tl.name} {...tl} />;
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
