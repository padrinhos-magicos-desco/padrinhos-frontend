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
    <Link to={url}>
      <div
        className="Button_container"
        style={{
          backgroundColor: buttonColor,
          borderColor,
          borderWidth: useBorder ? '1.5px' : '0px',
        }}
      >
        <p style={{ color: buttonTextColor }}>{buttonText}</p>
      </div>
    </Link>
  );
};

Button.defaultProps = {
  buttonColor: '#00e88f',
  buttonTextColor: '#111111',
  borderColor: 'none',
  useBorder: false,
};

export default Button;
