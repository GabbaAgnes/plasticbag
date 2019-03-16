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
      
      instructions: props.instructions,
      points: [''],
      img: '',
      abletoDelete:true

    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleNewPoint = this.handleNewPoint.bind(this);
    this.handleChangeIng = this.handleChangeIng.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
    componentWillReceiveProps(newProps){
      this.setState({instructions:newProps.instructions})
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
      img: '',
      abletoDelete:true

    })
  }
  
  render() {
    const {title, instructions, img, points} = this.state;
    const {onClose} = this.props;
    
    
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
            placeholder='Click on the text in the squares below to copy!'
            key='instructions'
            id='recipe-instructions-input'
            type='Instructions'
            name='instructions'
            rows='8'
            cols='40'
            autoComplete='off'
            value={instructions}
            onChange={this.handleChange}/>
          
          <div className='recipe-form-line'>
            <label className="shake-slow shake-constant shake-constant--hover" htmlFor='recipe-img-input'>Paste An Image Url</label>
            <input
              placeholder='Any img or gif address!'
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