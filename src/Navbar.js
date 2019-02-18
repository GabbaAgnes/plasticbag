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
        <h2><a>Add a new showcase</a></h2>
        <nav>
          <li><a onClick={this.props.onNewShowcase}>New Showcase</a></li>
          
        </nav>
      </header>
    );
  }
}

export default Navbar;