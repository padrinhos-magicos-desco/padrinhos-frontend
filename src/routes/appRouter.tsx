import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../screens/Home';
import SponsoredScreen from '../screens/Register/Sponsored';
import SponsorScreen from '../screens/Register/Sponsor';
import Sponsored from '../screens/Logged/Sponsored';
import Sponsor from '../screens/Logged/Sponsor';
import Login from '../screens/Login';
import Sandbox from '../screens/Sandbox';
import Database from '../gateways/database';

const AppRouter = () => {
  const db = Database.getDatabase();
  db.deserializeDB();
  db.serializeDB();

  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/apadrinhado/cadastro" exact component={SponsoredScreen} />
      <Route path="/padrinho/cadastro" exact component={SponsorScreen} />

      <Route path="/apadrinhado" exact component={Sponsored} />
      <Route path="/padrinho" exact component={Sponsor} />

      <Route path="/sandbox" exact component={Sandbox} />
    </Router>
  );
};

export default AppRouter;
