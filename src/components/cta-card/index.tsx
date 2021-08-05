import Button from '../button';
import Check from '../icon/Check';

import './cta-card.css';

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
      <div className="CTACard_topics">
        {topics.map((topic) => (
          <>
            <p className="CTACard_topic">
              <Check />
              {topic}
            </p>
          </>
        ))}
      </div>
      <Button buttonText={buttonText} />
    </div>
  );
};

export default CTACard;
