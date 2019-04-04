import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component {
  static defaultProps = {
    onNewShowcase() {}
  }
  
  static propTypes = {
    onNewShowcase: PropTypes.func
  }
  
  render() {
    return (
      <header>
        <br/>
        <h4 id="explainAdding" >To hatch a display to add to below collection with the above materials: simply click on your preferred paragraph, it will be automatically pasted inside of "Click to Hatch". <br/> <br/>Same with your choice of img/gif, click any and its url will be automatically pasted. <br/>
        Once done, open "Click to Hatch" to "HATCH"<br/> ↓ ↓ ↓ ↓ ↓ </h4>
        
       
        <nav >
       <a id="clickAdd" onClick={this.props.onNewShowcase} >Click to Hatch</a>
          
        </nav>
        <br /><br /><h2 id="display">DISPLAYS</h2>
      </header>
    );
  }
}

export default Navbar;