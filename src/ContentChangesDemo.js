import React, { Component } from 'react';
import logo from './logo.svg';
import './ContentChangesDemo.css';
import { XMasonry, XBlock } from "react-xmasonry/dist/index.js";
import * as utils from "./utils.jsx";



export default class ContentChangesDemo extends React.Component {

    state = {
        data: utils.generateArticles()

    };

    xMasonry = null;

    componentDidMount () {
        // whenever you need to update XMasonry manually, call this.xMasonry.update()
    }
     clickedFace=(e)=>{
         console.log(this,e);
     }
    render () {
        return <div className="demo" id="ContentChangesDemo">
            <div className="centerText">
                <button onClick={ () => this.setState({ data: utils.generateArticles() }) }>
                    Regenerate
                </button>
            </div>
            <XMasonry ref={ (x) => this.xMasonry = x }>{ this.state.data.map((article, i) =>
                <XBlock key={ article.id } width={ article.cardWidth } onClick={()=>{this.clickedFace(article)}}>
                    <div className="card" style={{position: "relative"}}>
                        <img src={ article.cover } alt="image"/>
                       
                    </div>
                </XBlock>
            )}</XMasonry>
        </div>
    }

}
                     
