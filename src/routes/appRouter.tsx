import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Screen from '../screens/Screen';
import SponsoredRegister from '../screens/Register/Sponsored';
import Sponsored from '../screens/Logged/Sponsored';
import Sponsor from '../screens/Logged/Sponsor';
import Login from '../screens/Login';
import Sandbox from '../screens/Sandbox';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/apadrinhado/registro" exact component={SponsoredRegister} />
      <Route path="/screen/:id" exact component={Screen} />

      <Route path="/apadrinhado" exact component={Sponsored} />
      <Route path="/padrinho" exact component={Sponsor} />

      <Route path="/sandbox" exact component={Sandbox} />
    </Router>
  );
};

export default AppRouter;
