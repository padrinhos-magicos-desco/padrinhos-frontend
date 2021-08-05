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
        <div className="Home_content">
          <div className="Home_main-text">
            <h1 className="Home_h1">PADRINHOS MÁGICOS ATIVAR!</h1>
            <h2 className="Home_h2">
              Um subtítulo que contextualize o rolê do apadrinhamento e como
              isso é importante para a educação. Que somos uma empresa foda pra
              caralho e vamos mudar a educação do mundo.
            </h2>
          </div>
          <div className="Home_image" />
        </div>
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
