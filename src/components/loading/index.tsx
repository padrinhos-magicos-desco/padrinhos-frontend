import Spinner from 'react-spinkit';

import './loading.css';

type Props = {
  loading: boolean;
};

const Loading: React.FC<Props> = ({ loading }: Props) => {
  return loading ? (
    <div className="Loading_overlay-content">
      <div className="Loading_wrapper">
        <Spinner name="circle" fadeIn="none" color="green" />
      </div>
    </div>
  ) : null;
};

export default Loading;
