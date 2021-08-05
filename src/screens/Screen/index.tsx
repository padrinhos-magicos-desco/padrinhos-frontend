import { useContext } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import LoadingContext from '../../contexts/loading';
import Loading from '../../components/loading';

type TParams = { id: string };
type Props = RouteComponentProps<TParams>;

const Screen: React.FC<Props> = ({ match }: Props) => {
  const { loading } = useContext(LoadingContext);

  if (loading) {
    return <Loading loading />;
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/screen/100">Screen With Param</Link>
          </li>
        </ul>
      </nav>

      <div>
        <h2>Página com parametro: {match.params.id}</h2>
      </div>
    </>
  );
};

export default Screen;
