import React, {Component} from 'react';
import './ScrollSquares.css';
import CopyExample from './CopyText';
import LightboxExample from './LightBox'; 

class ScrollSquares extends Component {
  
  render() {
   
    
    return (
      <div >
       <div className="horizontal-scroll-wrapper texts">
          <div></div>
          <div><CopyExample copyTextMethod={this.props.copyTextMethod} copy={"hell"}/></div>
          <div><CopyExample copyTextMethod={this.props.copyTextMethod} copy={"hello"}/></div>
          <div>item 4</div>
          <div>item 5</div>
          <div>item 6</div>
          <div>item 7</div>
          <div>item 8</div>
          <div>item 9</div>
          <div>item 10</div>
          <div>item 11</div>
          <div>item 12</div>
          <div>item 13</div>
          <div>item 14</div>

        </div>
        <div>
        <LightboxExample/>
        <div className="horizontal-scroll-wrapper squares">
          <div>item 1</div>
          <div>item 2</div>
          <div><img src="../images/1.png" alt="" title="Big Image"/>item 3</div>
          <div></div>
          <div>item 5</div>
          <div>item 6</div>
          <div>item 7</div>
          <div>item 8</div>
          <div>item 9</div>
          <div>item 10</div>
          <div>item 11</div>
          <div>item 12</div>
          <div>item 13</div>
          <div>item 14</div>

        </div>
        </div>
      </div>
    )
  
  }
}

export default ScrollSquares;