type Props = {
  onChange: (value: number) => void;
  currentIndex: number;
  min: number;
  max: number;
};

const SliderInput: React.FC<Props> = ({
  onChange,
  currentIndex,
  min,
  max,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(+event.target.value);
  };

  return (
    <div className="SliderInput_container">
      <input
        type="range"
        min={min}
        max={max}
        value={currentIndex}
        className="SliderInput_slider"
        onChange={handleChange}
      />
    </div>
  );
};

export default SliderInput;
