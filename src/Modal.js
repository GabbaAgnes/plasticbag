import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCart from './ShoppingCart'


class Modal extends Component {
    state = {
        
        title: "WELCOME AND LET'S GET IT",
        description: "Inspirational knowledge from Greg Mckeown’s book 'Essentialism-The disciplined Pursuit of Less' combined with mostly surrealistist artwork",
        price: "ʕ•ᴥ•ʔ" + ""
    }

//<button className="clickthis" onClick={this.props.onChangeAnimalClick}>click</button>

    render() {
        return (
            <div>
                
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
