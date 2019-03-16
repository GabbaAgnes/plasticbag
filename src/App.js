import React, { Component } from 'react';
import Home from './Home';
import Landing from './Landing';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';




class App extends Component {
  render() {

    return (
      <Router>


        <div className="App">
          <nav className="nav-style">


            <ul className="slide">
            
             <Content>
              <Link to='/'>
            
               <img className="shake-slow shake-constant shake-constant--hover" border="0" alt="landingImage" src="./images/101.jpg" width="100" height="100"></img>

              
              </Link>
              </Content>


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



const Content = styled.div`
   
`;

export default App;
// <li><Link to='/home'>home</Link></li>