import React, { Component } from 'react';

import './InitialButton.css';

class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        buttonText: 'INTERESTED?',
        class: ''
      }
    }
    
    handlePush = (e) => {
      if(this.state.class === "success") return;
      const fakeDataCall = new Promise((resolve, reject) => {
        setTimeout(function(){
          resolve("success");
        }, 3000);
      });
      this.setState({class: 'loading'}, () => {
        fakeDataCall.then(() => {
          this.setState({class: "success", buttonText: "ENTER"});
        });
      });
    }
    render() {
      return (
        <button className="thisButton" onClick={this.handlePush} class={this.state.class}>
          <span>{this.state.buttonText}</span>
        </button>
      )
    }
  }

  export default Button;
