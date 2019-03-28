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
      img: '',
      abletoDelete:true

    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
    componentWillReceiveProps(newProps){
      this.setState({instructions:newProps.instructions})
    }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  
  

  
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
     
      instructions: '',
      
      img: '',
      abletoDelete:true

    })
  }
  
  render() {
    const {title, instructions, img} = this.state;
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
          
          
         
          <textarea
             className="copiedInput"
            placeholder='If you are seeing this, you haven not grabbed parent one yet!'
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
            <label id="pasteUrl" className="shake-slow shake-constant shake-constant--hover" htmlFor='recipe-img-input'>Paste Img/Gif Url</label>
            <input
              className="copiedInput"
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
            className="btn btn--wut is-active"
            style={{alignSelf: 'flex-end', marginRight: 0}}
          >
            HATCH
          </button>
        </form>
      </div>
    )
  }
}

export default RecipeInput;

