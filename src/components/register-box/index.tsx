import './register-box.css';

type Props = {
  imageUrl?: string;
  disabled?: boolean;
  onContinue: () => void;
  children: JSX.Element;
  final?: boolean;
  hideImage?: boolean;
};

const FALLBACK_IMAGE = '';

const RegisterBox: React.FC<Props> = ({
  imageUrl,
  onContinue,
  children,
  disabled,
  final,
  hideImage,
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
        {!hideImage && <img src={imageUrl} alt="" />}
      </div>
    </div>
  );
};

RegisterBox.defaultProps = {
  disabled: false,
  imageUrl: FALLBACK_IMAGE,
  final: false,
  hideImage: false,
};

export default RegisterBox;
