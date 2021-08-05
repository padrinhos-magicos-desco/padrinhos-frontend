const Stamp: React.FC = () => {
  return (
    <svg
      width="103"
      height="103"
      viewBox="0 0 103 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <circle cx="51.5" cy="47.5" r="47.5" fill="#FED500" />
        <g clipPath="url(#clip0)">
          <path
            d="M35.6729 43.3884H33.8049V50.3877H35.6729V54.8485H33.8049V59.7573H29.0414V54.8485H26.7809V59.7573H22.0175V54.8485H20.1494V50.3877H22.0175V43.3884H20.1494V38.9088H22.0175V34H26.7809V38.9088H29.0414V34H33.8049V38.9088H35.6729V43.3884ZM28.9666 50.3877V43.3884H26.7064V50.3877H28.9666Z"
            fill="#111111"
          />
          <path
            d="M49.0485 34V38.1996H45.742V59.7573H40.717V38.1996H37.4292V34H49.0485Z"
            fill="#111111"
          />
          <path
            d="M50.9165 59.7573V34H58.5194L60.2194 53.0754H60.5371L62.2371 34H69.8213V59.7573H65.1699V40.8314H64.7777L62.9096 59.7573H57.6976L55.9417 40.8314H55.5493V59.7573H50.9165Z"
            fill="#111111"
          />
          <path
            d="M76.8641 50.5742V54.4565C76.8641 55.3711 77.2189 55.8003 77.9288 55.8003C78.6386 55.8003 78.975 55.3711 78.975 54.4565V33.9253H84V54.4565C84.0778 55.2354 83.977 56.0219 83.7051 56.756C83.4332 57.4902 82.9974 58.1527 82.4309 58.6933C81.0762 59.5234 79.5179 59.9628 77.9288 59.9628C76.3396 59.9628 74.7816 59.5234 73.4269 58.6933C72.8535 58.157 72.4119 57.4956 72.1364 56.7607C71.861 56.0258 71.7591 55.2372 71.8388 54.4565V50.5369L76.8641 50.5742Z"
            fill="#111111"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="103"
          height="103"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <clipPath id="clip0">
          <rect
            width="64"
            height="26"
            fill="white"
            transform="translate(20 34)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Stamp;
