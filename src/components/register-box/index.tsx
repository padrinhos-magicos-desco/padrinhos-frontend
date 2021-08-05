import './register-box.css';

type Props = {
  imageUrl: string;
  disabled?: boolean;
  onContinue: () => void;
  children: JSX.Element;
};

const RegisterBox: React.FC<Props> = ({
  imageUrl,
  onContinue,
  children,
  disabled,
}: Props) => {
  return (
    <div className="RegisterBox_container">
      <div className="RegisterBox_content">
        <div className="RegisterBox_body">{children}</div>
        <img src={imageUrl} alt="" />
      </div>
      <div className="RegisterBox_footer">
        <button
          className={disabled ? 'disabled' : ''}
          type="button"
          onClick={onContinue}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

RegisterBox.defaultProps = {
  disabled: false,
};

export default RegisterBox;
