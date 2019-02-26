import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
  static propTypes = {
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
  }

  render() {
    const { img, instructions, _id, onDelete } = this.props;
    const points = this.props.points.map((ing, index) => (
      <li key={index}>{ing}</li>
    ));
    return (
      <div className="recipe-card">


        <div className="recipe-card-content">
          <h4>Take these aways:</h4>
          <ul>
            {points}
          </ul>
          <h4>Check this out</h4>
          <p>{instructions}</p>
          </div>


        
        <div className="recipe-card-img">
          <img src={img} />
        </div>

      </div>
    );
  }
}

export default Recipe;
//<button type="button" onClick={() => onDelete(_id)}>DELETE</button>