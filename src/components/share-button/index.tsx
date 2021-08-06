type Props = {
  shareText: string;
};

const ShareButton: React.FC<Props> = ({ shareText }: Props) => {
  const shareUrl = `http://twitter.com/share?text=${shareText}&url=https://padrinhos-frontend.vercel.app/`;
  return (
    <a href={shareUrl}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 1.25C19.5711 1.25 21.25 2.92893 21.25 5C21.25 7.07107 19.5711 8.75 17.5 8.75C16.4001 8.75 15.4108 8.27645 14.7248 7.5221L9.04339 10.7693C9.17726 11.1548 9.25 11.5689 9.25 12C9.25 12.4311 9.17726 12.8452 9.04339 13.2307L14.7248 16.4779C15.4108 15.7236 16.4001 15.25 17.5 15.25C19.5711 15.25 21.25 16.9289 21.25 19C21.25 21.0711 19.5711 22.75 17.5 22.75C15.4289 22.75 13.75 21.0711 13.75 19C13.75 18.5689 13.8227 18.1548 13.9566 17.7693L8.2752 14.5221C7.58924 15.2764 6.59992 15.75 5.5 15.75C3.42893 15.75 1.75 14.0711 1.75 12C1.75 9.92893 3.42893 8.25 5.5 8.25C6.59992 8.25 7.58924 8.72355 8.2752 9.4779L13.9566 6.23068C13.8227 5.84518 13.75 5.43108 13.75 5C13.75 2.92893 15.4289 1.25 17.5 1.25ZM17.5 16.75C16.2574 16.75 15.25 17.7574 15.25 19C15.25 20.2426 16.2574 21.25 17.5 21.25C18.7426 21.25 19.75 20.2426 19.75 19C19.75 17.7574 18.7426 16.75 17.5 16.75ZM5.5 9.75C4.25736 9.75 3.25 10.7574 3.25 12C3.25 13.2426 4.25736 14.25 5.5 14.25C6.74264 14.25 7.75 13.2426 7.75 12C7.75 10.7574 6.74264 9.75 5.5 9.75ZM17.5 2.75C16.2574 2.75 15.25 3.75736 15.25 5C15.25 6.24264 16.2574 7.25 17.5 7.25C18.7426 7.25 19.75 6.24264 19.75 5C19.75 3.75736 18.7426 2.75 17.5 2.75Z"
          fill="#666666"
        />
      </svg>
    </a>
  );
};

export default ShareButton;
