import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Currencies from './components/Currencies';
import Currency from './components/Currency';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Currencies />
      </Route>
      <Route path="/currency/:code">
        <Currency />
      </Route>
    </Switch>
  </Router>
);

export default App;
