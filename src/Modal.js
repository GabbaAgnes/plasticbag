import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCart from './ShoppingCart'


class Modal extends Component {
    state = {
        animal: "zebra",
        title: "Ova Highchair",
        description: "From formula to fruits, your baby's got a lot of eating ahead. An Ova high chair is the right place for breakfast, lunch and dinner.",
        price: "€" + 89
    }



    render() {
        return (
            <div>
                <button className="clickthis" onClick={this.props.onChangeAnimalClick}>click</button>
                <div className="modal" data-status={this.props.status}>
                    <div className="modal-left">
                        <span className="price-tag">{this.state.price}</span>
                    </div>
                    <div className="modal-right">
                        <h2>{this.state.title}</h2>
                        <p>{this.state.description}</p>
                        <button onClick={this.props.onModalClick} className="close">
                            <span className="fa fa-close"></span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;
