import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Screen from '../screens/Screen';
import Sponsored from '../screens/Sponsored';
import Sandbox from '../screens/Sandbox';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/apadrinhado/register" exact component={Sponsored} />
      <Route path="/screen/:id" exact component={Screen} />
      <Route path="/sandbox" exact component={Sandbox} />
    </Router>
  );
};

export default AppRouter;
