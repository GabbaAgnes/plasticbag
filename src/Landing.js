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
      <p className="boldWords">Click the dude to begin</p>
      <ShoppingCart />
      <section className="usethis" style={sectionStyle}>

        <div className="Landing">
    


        </div>

        <div className="scallop-up"></div>
        <div className="colour-block">
        <div className="line">
        <p className="red">
        <Typist>
        <br />
          The way of the Essentialist means living<br /><br />
          <Typist.Delay ms={500} />
          by design, not by default. Instead of making <br /><br />
          choices reactively,the Essentialist deliberately<br /> <br />
          distinguishes the vital few from the trivial many.<br /><br />
          It is about making the wisest possible investment<br /><br />
          of your time and energy in order to operate at your<br /><br />
          highest point of contribution by doing only what is <br /><br />
          essential.
      
        </Typist>
        
        </p></div>
        </div>
        <div class="scallop-down"></div>

      
      <div>
        <Link to='/home' onClick={()=>{window.scrollTo(0,0)}}>
        
               <img border="0" alt="landingImage" src="http://localhost:3000/images/hello.png" width="100" height="100"></img>

            
        </Link></div>
       



      </section>
      </div>
    );
  }
}





export default Landing;

/*<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />*/