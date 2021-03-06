import './modal.css';

type Props = {
  children: JSX.Element;
  onCloseClick: () => void;
};

const Modal: React.FC<Props> = ({ children, onCloseClick }: Props) => {
  return (
    <>
      <div className="Modal_blur" />
      <div className="Modal_container">
        <div
          role="button"
          tabIndex={0}
          onClick={onCloseClick}
          className="Modal_close-button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.53033 5.46967L12 10.939L17.4697 5.46967C17.7359 5.2034 18.1526 5.1792 18.4462 5.39705L18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L13.0607 12L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L12 13.061L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L10.9393 12L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967Z"
              fill="#111111"
            />
          </svg>
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
