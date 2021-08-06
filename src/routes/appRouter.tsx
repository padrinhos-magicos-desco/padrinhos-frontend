import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Screen from '../screens/Screen';
import SponsoredScreen from '../screens/Sponsored';
import LoginScreen from '../screens/Login';
import SponsorScreen from '../screens/Sponsor';

import Sandbox from '../screens/Sandbox';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={LoginScreen} />
      <Route path="/apadrinhado/cadastro" exact component={SponsoredScreen} />
      <Route path="/padrinho/cadastro" exact component={SponsorScreen} />
      <Route path="/sandbox" exact component={Sandbox} />
      <Route path="/screen/:id" exact component={Screen} />
    </Router>
  );
};

export default AppRouter;
