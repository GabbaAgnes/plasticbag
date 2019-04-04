import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './Home.css';
import RecipeApp from './RecipeApp';
import CopyText from './CopyText';

import ScrollSquares from './ScrollSquares';
import ScrollSquaresImg from './ScrollSquaresImg';

import Picker from './Picker'

class Home extends Component {
  state = {
    stateful: true,
    top: "100px",
    disappear: false,
    instructions:"",
    img:""
  }
  

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  copyTextMethod=(text)=>{
    console.log(text)
    this.setState({instructions:text})
  }


  copyImageMethod=(text)=>{
    console.log(text.target.src)
    this.setState({img:text.target.src})
  }


  selectImage = (gif) => {
    console.log('gif', gif)
    this.setState({ img: gif.original.url })
  }


  handleScroll = () => {

    this.setState({ top: window.scrollY + "px" })
    //console.log(window.scrollY)
    if (window.scrollY > 1000) {
      this.setState({
        disappear: true
      })
    } else {
      this.setState({
        disappear: false
      })
    }
  }


  render() {

    return (
      

      <div className="homewrapper">


        <Content top={this.state.top} disappear={this.state.disappear}>


          <Router>
          </Router>
        </Content>
       


      

        <br /><br />

        <h1 className="explainShowcase">
        Below paragraghs are taken from the book in no particular order; please take some time to read through.
        <div>↓ ↓ ↓ ↓ ↓</div><br />
        
        </h1><br /><br />
        
        <ScrollSquares copyTextMethod={this.copyTextMethod}/><br /><br />
        <ScrollSquaresImg copyImageMethod={this.copyImageMethod}/>
        <div className="explainShowcase">Or find a GIF of your choice
        </div><br /><br />
        
        <div>
        <Picker onSelected={this.selectImage} />
      </div>
      
        <RecipeApp instructions={this.state.instructions} img={this.state.img}/> <br />
        
        

       
        

     

      </div>
      


    )
  }
}

const Content = styled.div`
    
    background-image: url("https://images.unsplash.com/photo-1505835045737-a37cf2e93876?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80");
    width: 100%;
    height: 1000px;
    top:0;
    background-size: ${props => props.top || "1px"};
    background-attachment: fixed;
    background-position: center;
   
    visibility: ${props => props.disappear ? "show" : "show"}
`;



export default Home;
/*border: 10px solid #000;*/