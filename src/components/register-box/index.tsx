import './register-box.css';

type Props = {
  imageUrl?: string;
  disabled?: boolean;
  onContinue: () => void;
  children: JSX.Element;
  final?: boolean;
};

const FALLBACK_IMAGE = '';

const RegisterBox: React.FC<Props> = ({
  imageUrl,
  onContinue,
  children,
  disabled,
  final,
}: Props) => {
  return (
    <div className="RegisterBox_container">
      <div className="RegisterBox_content">
        <div className="RegisterBox_body">
          {children}
          <div className="RegisterBox_footer">
            {final ? null : (
              <button
                className={disabled ? 'disabled' : ''}
                type="button"
                onClick={!disabled ? onContinue : undefined}
              >
                Continuar
              </button>
            )}
          </div>
        </div>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

RegisterBox.defaultProps = {
  disabled: false,
  imageUrl: FALLBACK_IMAGE,
  final: false,
};

export default RegisterBox;
