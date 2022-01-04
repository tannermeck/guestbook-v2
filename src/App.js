import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <PrivateRoute exact path='/'>
            <Body />
          </PrivateRoute>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
