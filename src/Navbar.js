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
        <h2 id="explainAdding" className="shake-little shake-constant shake-constant--hover">In case you would like to enrich the content of this page.</h2>
        <nav className="shake-slow shake-constant shake-constant--hover">
       <a id="clickAdd" onClick={this.props.onNewShowcase}>Click to Add A New Showcase to The collection Above</a>
          
        </nav>
      </header>
    );
  }
}

export default Navbar;