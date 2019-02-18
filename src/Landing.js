import React, { Component } from 'react';
import logo from './logo.svg';
import './Landing.css';
import ShoppingCart from './ShoppingCart'
import Background from './images/photo2.jpg'
import CrudApp from './CrudApp'
import Button from './InitialButton'

var sectionStyle = {

  backgroundImage:  `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height:'1807px'
};

class Landing extends Component {
  
  render() {
    return (
      <section className="usethis" style={ sectionStyle }>
     
      <div className="Landing">
      LANDING
      <ShoppingCart/> 
      
      
      </div>
      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      The way of the Essentialist means living<br/><br/><br/>
       by design, not by default. Instead of making <br/><br/><br/>
       choices reactively,the Essentialist deliberately<br/> <br/><br/>
       distinguishes the vital few from the trivial many.<br/><br/><br/>
       It is about making the wisest possible investment<br/><br/><br/>
       of your time and energy in order to operate at your<br/><br/><br/>
       highest point of contribution by doing only what is <br/><br/><br/>
       essential.
       <br/><br/>
     <Button/>


      </section>
    );
  }
}
   


    

export default Landing;
