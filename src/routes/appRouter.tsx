import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Screen from '../screens/Screen';
import Sandbox from '../screens/Sandbox';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/screen/:id" exact component={Screen} />
      <Route path="/sandbox" exact component={Sandbox} />
    </Router>
  );
};

export default AppRouter;
