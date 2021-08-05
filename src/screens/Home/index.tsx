import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LoadingContext from '../../contexts/loading';
import Loading from '../../components/loading';
import { getData } from '../../gateways/api';
import Logo from '../../components/logo/logo';
import Button from '../../components/button/button';

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
      <section className="home-screen-section home-screen-main">
        <nav>
          <Logo />
          <ul>
            <Button
              buttonText="Quero participar"
              buttonColor="#00e88f"
              buttonTextColor="#000"
            />
            <li>
              <Button
                buttonText="Entrar"
                buttonColor="#000"
                buttonTextColor="#fff"
              />
            </li>
          </ul>
        </nav>
      </section>
      <section className="home-screen-section home-screen-secondary" />
      <section className="home-screen-section home-screen-benefits" />
      <section className="home-screen-section home-screen-get-to-know" />
      <section className="home-screen-section home-screen-social-proof" />
      <section className="home-screen-section home-screen-last-call" />
      <section className="home-screen-section home-screen-footer" />
    </>
  );
};

export default Home;
