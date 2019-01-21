import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Landing from './Landing';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <nav className="nav-style">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/landing'>Landing</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/landing' component={Landing} />
        </Switch>
      </div>
      </Router>
    );
  }
} 

export default App;
