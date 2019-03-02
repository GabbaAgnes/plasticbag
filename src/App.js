import React, { Component } from 'react';
import Home from './Home';
import Landing from './Landing';

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';




class App extends Component {
  render() {

    return (
      <Router>


        <div className="App">
          <nav className="nav-style">


            <ul className="slide">
            

              <Link to='/'>
               <div>
               <img border="0" alt="landingImage" src="http://localhost:3000/images/101.jpg" width="100" height="100"></img>

               </div>
              </Link>
            


            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/home' component={Home} />
            

          </Switch>
        </div>


      </Router>
    );
  }
}


export default App;
// <li><Link to='/home'>home</Link></li>