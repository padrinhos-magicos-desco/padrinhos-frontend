import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Screen from '../screens/Screen';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/screen/:id" exact component={Screen} />
    </Router>
  );
};

export default AppRouter;
