import React, { Component } from 'react';
import logo from './logo.svg';
import './Landing.css';
import ShoppingCart from './ShoppingCart'
import Background from './images/photo2.jpg'

import Home from './Home'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


var sectionStyle = {

  backgroundImage: `url(${Background})`,
  
  
};



class Landing extends Component {
 
  render() {
   

    return (
      <div>
      <p id="boldWords" className="shake-little shake-constant shake-constant--hover">Click on the dude below</p>
      <ShoppingCart />
      <section className="usethis" style={sectionStyle}>

        <div className="Landing">
    


        </div>

        <div className="scallop-up"></div>
        <div className="colour-block">
        <div className="line">
        <p className="red">
        
        <br />
        A WEBSITE DEDICATED TO THOSE WHO HAVE NOT READ THE BOOK:<br/><br/>

        Inspirational knowledge from Greg Mckeown’s book <br/>
        'Essentialism-The disciplined Pursuit of Less' <br/>
        combined with groovy artworks.
        
        
        </p></div>
        </div>
        <div class="scallop-down"></div>

      
      <div>
        <h2>Below creature will start the app</h2>
        <Link to='/home' onClick={()=>{window.scrollTo(0,0)}}>
        
               <img className="shake-slow shake-constant shake-constant--hover" border="0" alt="landingImage" src="./images/hello.png" width="100" height="100"></img>
            
        </Link></div>
       



      </section>
      </div>
    );
  }
}





export default Landing;

/*<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


          <Typist.Delay ms={5000} />
*/