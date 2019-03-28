import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './Home.css';
import RecipeApp from './RecipeApp';
import CopyExample from './CopyText';
import ScrollSquares from './ScrollSquares';
import GetGifs from './GetGifs';


class Home extends Component {
  state = {
    stateful: true,
    top: "100px",
    disappear: false,
    instructions:""
  }
  

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  copyTextMethod=(text)=>{
    console.log(text)
    this.setState({instructions:text})
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
        Below paragraghs are taken from the book in no particular order; reading through these messages has been a wonderful experience, I start to rethink those actions in my life that 
        I can improve upon as well as information that should be addressed.
        <div>------------------------------------------------</div>
        Each paragragh is one of the parent of the final hatched display, assign anyone by clicking on it--the highlighted
        edge indicates those words are inserted(copied) in the egg.  
        </h1>
        
        <ScrollSquares copyTextMethod={this.copyTextMethod}/>
        <h2 className="explainShowcase">Or find a GIF of your choice
        -- Please ponder your choice, making a perfect match requires the visual representation to reflect the meaning of the messages. </h2>
        
        <GetGifs/>
        <RecipeApp instructions={this.state.instructions}/> <br />
        
        

       
        

     

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