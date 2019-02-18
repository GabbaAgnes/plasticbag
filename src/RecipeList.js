import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
  static propTypes = {
    showcases: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired
  }
  
  render() {
    const {onDelete} = this.props;
    const showcases = this.props.showcases.map((r,index) => (
      <Recipe key={r._id} {...r} onDelete={onDelete} />
    ));
    
    return (
      <div className="recipe-list">
        {showcases}
      </div>
    )
  
  }
}

export default RecipeList;