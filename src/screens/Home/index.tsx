import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LoadingContext from '../../contexts/loading';
import Loading from '../../components/loading';

import './home.css';
import { getData } from '../../gateways/api';

const Home: React.FC = () => {
  const { loading, dispatch } = useContext(LoadingContext);

  useEffect(() => {
    async function AsyncMethod() {
      dispatch({ type: 'SET_LOADING_STATE' });
      await getData();
      dispatch({ type: 'REMOVE_LOADING_STATE' });
    }

    AsyncMethod();
  }, [dispatch]);

  if (loading) {
    return <Loading loading />;
  }

  return (
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
  );
};

export default Home;
