import React, { Component } from 'react';
import Home from './Home';
import Landing from './Landing';
import about from './about';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';




class App extends Component {
  render() {

    return (
      <Router>


        <div className="App">
          <nav className="nav-style">


            <ul className="slide">
              <li><Link to='/'>landing</Link></li>
              <li><Link to='/aboutthis'>ABOUT</Link></li>


            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/home' component={Home} />
            <Route path='/aboutthis' component={about} />

          </Switch>
        </div>


      </Router>
    );
  }
}


export default App;
// <li><Link to='/home'>home</Link></li>