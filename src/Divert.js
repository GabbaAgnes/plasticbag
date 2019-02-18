import React, { Component } from 'react';
import axios from 'axios'
import Good from './canvas'

import CrudApp from './CrudApp'


class Divert extends Component {
  postToMlab=()=>{
    axios.post('http://localhost:8080/add', {
      mood:'happy',
   })
   .then(function (response) {
     console.log(response);
   })
   .catch(function (error) {
     console.log(error);
   });
  }
  getFromMlab=()=>{
    axios.get('http://localhost:8080/get')
   .then(function (response) {
     console.log(response);
   })
   .catch(function (error) {
     console.log(error);
   });
     
  }
  render() {

    return (
      <div>
        <div className="other" onClick={this.getFromMlab}>
        Other
      </div>
      <div className="Divert" onClick={this.postToMlab}>
      Divert
       
     
      <div id="dialog-window">
              <div id="scrollable-content">
  
                  <ul>
                  
                    <li>Sample</li>
                    <li>Sample</li>
                    <li>Sample</li>
                    <li>Sample</li>
                    <li>Sample</li>
                    <li>Sample</li>
                    <li>Sample</li>
                    <li>Sample</li>
                    <li>Sample</li>
                    <li>Sample</li>
                    <li>Sample</li>
                    <li>Sample</li>
                    <li>Sample</li>
                  </ul>
             </div>
  

           <div id="footer">
         </div>

      </div>
      <Good/>   
      
         <CrudApp/>
         <br/>
         
      </div>
      
      
      </div>
    );
  }
}



export default Divert;
