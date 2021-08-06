import { Slider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

type Props = {
  onChange: (value: number) => void;
  currentIndex: number;
  min: number;
  max: number;
};

const PrettoSlider = withStyles({
  root: {
    color: '#239e5d',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#239e5ds',
    border: '2px solid currentColor',
    marginTop: -10,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  track: {
    height: 2,
    borderRadius: 4,
  },
  rail: {
    height: 1,
    borderRadius: 4,
  },
})(Slider);

const SliderInput: React.FC<Props> = ({
  onChange,
  currentIndex,
  min,
  max,
}: Props) => {
  const valuetext = (value: number) => {
    return `R$ ${value}`;
  };

  const handleChange = (event: unknown, value: number | number[]) => {
    if (typeof value !== 'number') {
      return;
    }
    onChange(value);
  };

  return (
    <PrettoSlider
      value={currentIndex}
      min={min}
      step={300}
      max={max}
      onChange={handleChange}
      aria-labelledby="non-linear-slider"
      getAriaValueText={valuetext}
      valueLabelDisplay="off"
    />
  );
};

export default SliderInput;
