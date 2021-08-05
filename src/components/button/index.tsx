import { Link } from 'react-router-dom';

import './button.css';

type Props = {
  buttonColor: string;
  buttonText: string;
  buttonTextColor: string;
  borderColor: string;
};

const Button: React.FC<Props> = ({
  buttonColor,
  buttonText,
  buttonTextColor,
  borderColor,
}: Props) => {
  return (
    <div
      className="Button_container"
      style={{ backgroundColor: buttonColor, borderColor }}
    >
      <Link to="/screen/100">
        <p style={{ color: buttonTextColor }}>{buttonText}</p>
      </Link>
    </div>
  );
};

export default Button;
