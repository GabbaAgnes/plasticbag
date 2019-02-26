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
    disappear: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
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
      <Wrapper><div>


        <Content top={this.state.top} disappear={this.state.disappear}>


          <Router>
          </Router>
        </Content>
       


      

        <br /><br />
        <GetGifs/>
        <ScrollSquares/>
        

        <RecipeApp />

        <br />
        

     

      </div>
      </Wrapper>

    )
  }
}

const Content = styled.div`
    border: 10px solid #000;
    background-image: url("https://images.unsplash.com/photo-1505835045737-a37cf2e93876?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80");
    width: 100%;
    height: 1000px;
    top:0;
    background-size: ${props => props.top || "1px"};
    background-attachment: fixed;
    background-position: center;
   
    visibility: ${props => props.disappear ? "show" : "show"}
`;
const Wrapper = styled.section`
  padding: 2em;
  border: 2px solid palevioletred;
  background-image: url("https://media.giphy.com/media/3oEjI7jnahus17FMhq/giphy.gif");

`;


export default Home;
