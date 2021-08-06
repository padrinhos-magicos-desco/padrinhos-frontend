import Button from '../button';

import './cta-card.css';
import Stamp from './stamp';

type Props = {
  title: string;
  subtitle: string;
  topics: string[];
  buttonText: string;
  showStamp?: boolean;
  buttonUrl: string;
};

const CTACard: React.FC<Props> = ({
  title,
  subtitle,
  topics,
  buttonText,
  showStamp,
  buttonUrl,
}: Props) => {
  return (
    <div className="CTACard_container">
      <h2 className="CTACard_title">{title}</h2>
      <p className="CTACard_subtitle">{subtitle}</p>
      <div className="CTACard_topics">
        {topics.map((topic) => (
          <>
            <p className="CTACard_topic">{topic}</p>
          </>
        ))}
        {showStamp && (
          <div className="CTACard_stamp-wrapper">
            <Stamp />
          </div>
        )}
      </div>
      <Button buttonText={buttonText} url={buttonUrl} />
    </div>
  );
};

CTACard.defaultProps = {
  showStamp: false,
};

export default CTACard;
