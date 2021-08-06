import Avatar from './avatar';
import './sponsored-card.css';

const containerStyles = {
  height: 20,
  width: '100%',
  backgroundColor: '#DDDDDD',
  borderRadius: 50,
};

const fillerStyles = {
  height: '100%',
  backgroundColor: '#00E88F',
  borderRadius: 'inherit',
};

const labelStyles = {
  padding: 5,
  color: 'black',
};

type Props = {
  progress?: number;
  desiredCourse: string;
  biography: string;
  onClick?: (
    progress: number,
    desiredCourse: string,
    biography: string
  ) => void;
};

const SponsoredCard: React.FC<Props> = ({
  progress,
  desiredCourse,
  biography,
  onClick,
}: Props) => {
  return (
    <div
      className="SponsoredCard_sponsored-card"
      role="button"
      tabIndex={0}
      onClick={() =>
        onClick && onClick(progress || 0, desiredCourse, biography)
      }
    >
      <div className="SponsoredCard_header">
        <Avatar />
        <div className="SponsoredCard_header-title">
          <h1 className="SponsoredCard_title">{desiredCourse}</h1>
          <div className="SponsoredCard_sponsored-progress">
            <div style={containerStyles}>
              <div style={{ ...fillerStyles, width: `${progress}%` || 0 }}>
                <span style={labelStyles}>{`${progress || 0}%`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="SponsoredCard_description">{biography}</p>
    </div>
  );
};

SponsoredCard.defaultProps = {
  progress: 0,
  onClick: () => null,
};

export default SponsoredCard;
