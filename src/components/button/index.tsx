import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './button.css';

type Props = {
  buttonColor?: string;
  buttonText: string;
  buttonTextColor?: string;
  borderColor?: string;
  useBorder?: boolean;
  url?: string;
  onClick?: () => null;
  isAnchor?: boolean;
};

const Button: React.FC<Props> = ({
  buttonColor,
  buttonText,
  buttonTextColor,
  borderColor,
  useBorder,
  url,
  onClick,
  isAnchor,
}: Props) => {
  const render = () => {
    if (url) {
      const linkContent = (
        <p style={{ color: buttonTextColor }}>{buttonText}</p>
      );

      const link = isAnchor ? (
        <Link to={url}>{linkContent}</Link>
      ) : (
        <HashLink to={url}>{linkContent}</HashLink>
      );

      return (
        <Link to={url}>
          <div
            className="Button_container"
            style={{
              backgroundColor: buttonColor,
              borderColor,
              borderWidth: useBorder ? '1.5px' : '0px',
            }}
          >
            {link}
          </div>
        </Link>
      );
    }

    return (
      <div
        className="Button_container"
        style={{
          backgroundColor: buttonColor,
          borderColor,
          borderWidth: useBorder ? '1.5px' : '0px',
        }}
        role="button"
        tabIndex={0}
        onClick={onClick}
      >
        <p style={{ color: buttonTextColor }}>{buttonText}</p>
      </div>
    );
  };

  return render();
};

Button.defaultProps = {
  buttonColor: '#00e88f',
  buttonTextColor: '#111111',
  borderColor: 'none',
  useBorder: false,
  url: '',
  onClick: () => null,
  isAnchor: false,
};

export default Button;
