import ReactSlider from 'react-slider';

type Props = {
  onChange: (value: number) => void;
  currentIndex: number;
  defaultValue: number;
  min: number;
  max: number;
};

const LogoVeja: React.FC<Props> = ({
  onChange,
  currentIndex,
  defaultValue,
  min,
  max,
}: Props) => {
  return (
    <ReactSlider
      className="Slider_container"
      thumbClassName="Slider_thumb"
      trackClassName="Slider_track"
      onChange={onChange}
      value={currentIndex}
      min={min}
      max={max}
      defaultValue={defaultValue}
    />
  );
};

export default LogoVeja;
