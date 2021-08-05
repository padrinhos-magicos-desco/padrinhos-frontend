import Button from '../button';

import './button.css';

type Props = {
  title: string;
  subtitle: string;
  topics: string[];
  buttonText: string;
};

const CTACard: React.FC<Props> = ({
  title,
  subtitle,
  topics,
  buttonText,
}: Props) => {
  return (
    <div className="CTACard_container">
      <h1 className="CTACard_title">{title}</h1>
      <h2 className="CTACard_subtitle">{subtitle}</h2>
      <div className="CTACard_topics" />
      {topics.map((topic) => (
        <p>{topic}</p>
      ))}
      <Button buttonText={buttonText} />
    </div>
  );
};

export default CTACard;
