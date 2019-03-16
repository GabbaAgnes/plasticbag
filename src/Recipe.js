import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
  static propTypes = {
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
  }

  render() {
    console.log(this)
    const { img, instructions, _id,onDelete,abletoDelete } = this.props;
   console.log(abletoDelete)
    return (
      <div className="recipe-card" id="animated-shadow-quote">
         


        <div className="recipe-card-content">
          
          <h4></h4>
          <p>{instructions}</p>
          </div>


        
        <div className="recipe-card-img">
          <img src={img} />
        </div>
        {abletoDelete?
        <button type="button" onClick={() => onDelete(_id)}>DELETE</button>:
        ""
      }
        

      </div>
    );
  }
}

export default Recipe;
/*<h4>Take these aways:</h4>
          <ul>
          {points}
        </ul>*/