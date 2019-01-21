import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';



class ShoppingCart extends Component {
  state = {
    animal: "zebra",
    status: false
  }

  componentDidMount() {
  }
  modalToggle = () => {
    this.setState({ status: !this.state.status })
    console.log('hello');
  }
 changeAnimal=()=> {
   this.setState({ animal: "corgi"})
 }



  render() {
    return (
      <div>
        {this.state.animal}
       
        <button className="place-order" onClick={this.modalToggle}>
          <span className="fa fa-shopping-cart"></span>

        </button>
        <Modal  onChangeAnimalClick= {this.changeAnimal} 
                onModalClick={this.modalToggle} 
                status={this.state.status} />
      </div>
    )
  }
}

export default ShoppingCart;
