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
        <h2 id="explainAdding" className="shake-little shake-constant shake-constant--hover">TIME FOR HATCHING</h2>
        <nav className="shake-slow shake-constant shake-constant--hover">
       <a id="clickAdd" onClick={this.props.onNewShowcase}>Click to COMBINE both parents</a>
          
        </nav>
      </header>
    );
  }
}

export default Navbar;