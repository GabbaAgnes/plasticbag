import React, { Component } from 'react';
import logo from './logo.svg';
import './Landing.css';
import ShoppingCart from './ShoppingCart'
import Background from './images/photo2.jpg'
import Typist from 'react-typist'

import Home from './Home'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


var sectionStyle = {

  backgroundImage: `url(${Background})`,
  
  
};



class Landing extends Component {
 
  render() {
   

    return (
      <div>
      Click the dude to begin
      <ShoppingCart />
      <section className="usethis" style={sectionStyle}>

        <div className="Landing">
    


        </div>

        
        <Typist>
          The way of the Essentialist means living<br /><br /><br />
          <Typist.Delay ms={500} />
          by design, not by default. Instead of making <br /><br /><br />
          choices reactively,the Essentialist deliberately<br /> <br /><br />
          distinguishes the vital few from the trivial many.<br /><br /><br />
          It is about making the wisest possible investment<br /><br /><br />
          of your time and energy in order to operate at your<br /><br /><br />
          highest point of contribution by doing only what is <br /><br /><br />
          essential.
       <br /><br />
        </Typist>

      
        <br />
        <Link to='/home' onClick={()=>{window.scrollTo(0,0)}}>home</Link>




      </section>
      </div>
    );
  }
}





export default Landing;

/*<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />*/