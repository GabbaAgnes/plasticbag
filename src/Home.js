import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import ContentChangesDemo from './ContentChangesDemo'
import CrudApp from './CrudApp'
import Good from './canvas'


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
       
          
        <Content top={this.state.top} disappear={this.state.disappear}>  
         TEXT
       </Content>
         <ContentChangesDemo/>
         <CrudApp/>
         <br/><br/><br/><br/><br/>
         <div id="dialog-window">

  <div id="scrollable-content">
  <Good/>
    <ul>
      <li>Sample</li>
      <li>Sample</li>
      <li>Sample</li>
      <li>Sample</li>
      <li>Sample</li>
      <li>Sample</li>
      <li>Sample</li>
      <li>Sample</li>
      <li>Sample</li>
      <li>Sample</li>
      <li>Sample</li>
      <li>Sample</li>
      <li>Sample</li>
    </ul>
  </div>

  <div id="footer">
  </div>

</div>
          
    
        </div>
      )}
    }
    
   const Content = styled.div`
    border: 1px solid #000;
    background-image: url("https://media.giphy.com/media/l4Ki4tqdPaBWaVDY4/giphy.gif");
    width: 100%;
    height: 1000px;
    top:0;
    background-size: ${props=>props.top || "1px"};
    background-attachment: fixed;
    background-position: center;
   
    visibility: ${props=>props.disappear ? "show": "show"}
`;
    

export default Home;
//height: 1000px;
// background-image: url("https://media.giphy.com/media/tn8zWeNYA73G0/giphy.gif");