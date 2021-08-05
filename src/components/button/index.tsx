import { Link } from 'react-router-dom';

import './button.css';

type Props = {
  buttonColor?: string;
  buttonText: string;
  buttonTextColor?: string;
  borderColor?: string;
  useBorder?: boolean;
  url: string;
};

const Button: React.FC<Props> = ({
  buttonColor,
  buttonText,
  buttonTextColor,
  borderColor,
  useBorder,
  url,
}: Props) => {
  return (
    <div
      className="Button_container"
      style={{
        backgroundColor: buttonColor,
        borderColor,
        borderWidth: useBorder ? '1.5px' : '0px',
      }}
    >
      <Link to={url}>
        <p style={{ color: buttonTextColor }}>{buttonText}</p>
      </Link>
    </div>
  );
};

Button.defaultProps = {
  buttonColor: '#00e88f',
  buttonTextColor: '#111111',
  borderColor: 'none',
  useBorder: false,
};

export default Button;
