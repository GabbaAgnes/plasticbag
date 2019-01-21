import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

class Home extends Component {
    state= {
        stateful: true,
        top: "100px",
        disappear: false
      }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    handleScroll=()=>{
      
    this.setState({top:window.scrollY+"px"})  
      console.log(window.scrollY)
      if (window.scrollY>1000){
        this.setState({
          disappear:true
        })
      }else{
        this.setState({
         disappear: false
      })
     }
    }
    
   render(){
        
        return(<div>
          <h1>Home</h1>
          
        <Content top={this.state.top} disappear={this.state.disappear}>  
       
       </Content>
          HELLO
         
          
    
        </div>
      )}
    }
    
   const Content = styled.div`
    border: 1px solid #000;
    background-image: url("https://media.giphy.com/media/tn8zWeNYA73G0/giphy.gif");
    width: 2000px;
    height: 1000px;
   
    top:0;
    background-size: ${props=>props.top || "1px"};
    background-attachment: fixed;
    background-position: center;
    visibility: ${props=>props.disappear ? "show": "show"}
`;
    

export default Home;
