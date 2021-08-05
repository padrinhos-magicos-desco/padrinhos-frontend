import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LoadingContext from '../../contexts/loading';
import Loading from '../../components/loading';
import { getData } from '../../gateways/api';
import Logo from '../../components/logo';

import './home.css';

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
    <>
      <section className="Home_section Home_main-section">
        <nav>
          <Logo />
          <ul>
            <li>
              <Link to="/">Padrinho</Link>
            </li>
            <li>
              <Link to="/screen/100">Apadrinhado</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="Home_section Home_secondary-section" />
      <section className="Home_section Home_benefits-section" />
      <section className="Home_section Home_get-to-know-section" />
      <section className="Home_section Home_social-proof-section" />
      <section className="Home_section Home_last-call-section" />
      <section className="Home_section Home_screen-footer-section" />
    </>
  );
};

export default Home;
