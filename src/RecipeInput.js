import React, {Component} from 'react';
import './RecipeInput.css';

class RecipeInput extends Component {
  static defaultProps = {
    onClose() {},
    onSave() {}
  }
  
  constructor(props) {
    super(props);
    this.state = {
      
      instructions: "",
      points: [''],
      img: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleNewPoint = this.handleNewPoint.bind(this);
    this.handleChangeIng = this.handleChangeIng.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  
  handleNewPoint(e) {
    const {points} = this.state;
    this.setState({points: [...points, '']});
  }
  
  handleChangeIng(e) {
    const index = Number(e.target.name.split('-')[1]);
    const points = this.state.points.map((ing, i) => (
      i === index ? e.target.value : ing
    ));
    this.setState({points});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
     
      instructions: '',
      points: [''],
      img: ''
    })
  }
  
  render() {
    const {title, instructions, img, points} = this.state;
    const {onClose} = this.props;
    let inputs = points.map((ing, i) => (
      <div
        className="recipe-form-line"
        key={`point-${i}`}
      >
        <label>{i+1}.
          <input
            type="text"
            name={`point-${i}`}
            value={ing}
            size={45}
            autoComplete="off"
            placeholder=" point"
            onChange={this.handleChangeIng} />
        </label>
      </div>
    ));
    
    return (
      <div className="recipe-form-container">
        <form className='recipe-form' onSubmit={this.handleSubmit}>
          <button
            type="button"
            className="close-button"
            onClick={onClose}
          >
            X
          </button>
          
          <label
            htmlFor='recipe-instructions-input'
            style={{marginTop: '5px'}}
          >
            
            
          </label>
          <textarea
            key='instructions'
            id='recipe-instructions-input'
            type='Instructions'
            name='instructions'
            rows='8'
            cols='50'
            autoComplete='off'
            value={instructions}
            onChange={this.handleChange}/>
          {inputs}
          <button
            type="button"
            onClick={this.handleNewPoint}
            className="buttons"
          >
            +
          </button>
          <div className='recipe-form-line'>
            <label htmlFor='recipe-img-input'>Image Url</label>
            <input
              id='recipe-img-input'
              type='text'
              placeholder=''
              name='img'
              value={img}
              size={36}
              autoComplete='off'
              onChange={this.handleChange} />
          </div>
          <button
            type="submit"
            className="buttons"
            style={{alignSelf: 'flex-end', marginRight: 0}}
          >
            SAVE
          </button>
        </form>
      </div>
    )
  }
}

export default RecipeInput;

//recipes is replaces by showcases