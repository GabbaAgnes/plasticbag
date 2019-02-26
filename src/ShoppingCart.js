import React, { Component } from 'react';
import logo from './logo.svg';
import Modal from './Modal';



class ShoppingCart extends Component {
  state = {
    //animal: "zebra",
    status: false
  }

  componentDidMount() {
  }
  modalToggle = () => {
    this.setState({ status: !this.state.status })
    console.log('hello');
  }
 


  render() {
    return (
      <div>
       
       
        <button className="place-order" onClick={this.modalToggle}>
          <span className="fa fa-shopping-cart"></span>

        </button>
        <Modal  
                onModalClick={this.modalToggle} 
                status={this.state.status} />
      </div>
    )
  }
}

export default ShoppingCart;
