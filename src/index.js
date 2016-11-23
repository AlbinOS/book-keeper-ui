// React
import React from 'react';
import ReactDOM from 'react-dom';

// Routing
import {routes} from './routes';
import { Router, browserHistory } from 'react-router'

// CSS
import './bootstrap.min.css';
import './index.css';

// Creating our top-level component
class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        {routes}
      </Router>
    );
  }
}

ReactDOM.render((
  <App />),
  document.getElementById('root'));
