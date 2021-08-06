import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './button.css';

type Props = {
  buttonColor?: string;
  buttonText: string;
  buttonTextColor?: string;
  borderColor?: string;
  useBorder?: boolean;
  url: string;
  isAnchor?: boolean;
};

const Button: React.FC<Props> = ({
  buttonColor,
  buttonText,
  buttonTextColor,
  borderColor,
  useBorder,
  url,
  isAnchor,
}: Props) => {
  const linkContent = <p style={{ color: buttonTextColor }}>{buttonText}</p>;

  const link = isAnchor ? (
    <Link to={url}>{linkContent}</Link>
  ) : (
    <HashLink to={url}>{linkContent}</HashLink>
  );

  return (
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
  );
};

Button.defaultProps = {
  buttonColor: '#00e88f',
  buttonTextColor: '#111111',
  borderColor: 'none',
  useBorder: false,
  isAnchor: false,
};

export default Button;
