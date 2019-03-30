import React, { Component } from 'react';
import logo from './logo.svg';
import './Modal.css';



class Modal extends Component {
    state = {
        
        title: "Essentialism",
        description: "The way of the Essentialist means living by design, not by default. Instead of making choices reactively,the Essentialist deliberately distinguishes the vital few from the trivial many. It is about making the wisest possible investment of your time and energy in order to operate at your highest point of contribution by doing only what is essential.",
       
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


