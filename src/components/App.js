import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../RouterExtend';
import PrivateRoute from '../RouterExtend/PrivateRouter';
import Header from './Header';
import Login from './Login';
import About from './About';
import Home from './Home';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header history={history} />
        <div className='body-container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <PrivateRoute path='/dashboard' exact component={Dashboard} />
            <Route path='/about' exact component={About} />
            <Route
              render={props => (
                <div className='text-center text-danger mt-5'>
                  <h1>404. That's an error.</h1>
                  <p>The requested URL was not found on this server.</p>
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
