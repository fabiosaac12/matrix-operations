import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Navigation } from '../Navigation';
import { OneMatrixOperations } from '../OneMatrixOperations';
import { TwoMatrixOperations } from '../TwoMatrixOperations';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/oneMatrix">
          <Navigation />
          <OneMatrixOperations />
        </Route>
        <Route path="/twoMatrix">
          <Navigation />
          <TwoMatrixOperations />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
