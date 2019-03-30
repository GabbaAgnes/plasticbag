import React, {Component} from 'react';
import './ScrollSquaresImg.css';
import CopyImage from './CopyImage';



class ScrollSquaresImg extends Component {
  
    render() {
     
      
      return (




<div>

<div id="explainPicGif">
Now its's time for the other parent, they have arrived by the train. 
<br/>
Click to automatically copy and paste the image address of your chosen one.



</div>
<br/>
  <div className="horizontal-scroll-wrapper squares">
    <div className="shake-slow shake-constant shake-constant--hover"></div>

    <div onClick={this.props.copyImageMethod}><img src="./images/grace.png" alt="grace"/></div>   
    <div onClick={this.props.copyImageMethod}><img src="./images/1.png" alt="1"/></div>

    <div><img src="./images/soon.png" alt="soon"/></div>
    <div><img src="./images/sunken.jpg" alt="sunken"/></div>
    <div><img src="./images/endow.gif" alt="endow"/></div>
    <div><img src="./images/6ee.gif" alt="6ee"/></div>
    <div><img src="./images/angel.jpg" alt="angel"/></div>
    <div><img src="./images/edit.png" alt="edit"/></div>
    <div><img src="./images/no.png" alt="no"/></div>
    <div><img src="./images/try6.gif" alt="try6"/></div>
    <div><img src="./images/11.png" alt="also11"/></div>
    <div><img src="./images/ty4.gif" alt="ty4"/></div>
    <div><img src="https://media.giphy.com/media/pL434y7GW8Ru8/giphy.gif" alt="giphy"/></div>
    <div><img src="./images/2.jpg" alt="2"/></div>
    <div><img src="./images/5.png" alt="5"/></div>
    <div><img src="./images/6.png" alt="6"/></div>
    <div><img src="./images/7.png" alt="7"/></div>
    <div><img src="./images/8.png" alt="8"/></div>
    <div><img src="./images/9.png" alt="9"/></div>
    <div><img src="./images/10.png" alt="10"/></div>
    <div><img src="./images/11.jpg" alt="11"/></div>
    <div><img src="./images/sleep.png" alt="sleep"/></div>
    <div><img src="./images/reborn.png" alt="reborn"/></div>
    <div><img src="./images/pause.jpg" alt="pause"/></div>
    <div><img src="./images/whatif1.gif" alt="whatif1"/></div>
    <div><img src="./images/focus.gif" alt="focus"/></div>
    <div><img src="./images/read.jpg" alt="read"/></div>
    <div><img src="./images/play.jpg" alt="play"/></div>
    <div><img src="./images/tradeoff1.jpg" alt="tradeoff1"/></div>
<div><CopyImage copyImageMethod={this.props.copyImageMethod} copy={"img src='./images/stretched.gif' alt='stretched'"}/></div>
<div><CopyImage copyImageMethod={this.props.copyImageMethod} copy={"https://i-h1.pinimg.com/564x/12/3c/89/123c899c49333b96f0b052d3a82ee8b6.jpg"}/></div>
  </div>
  </div>


)
  
}
}

export default ScrollSquaresImg;