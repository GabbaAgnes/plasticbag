import React, { Component } from 'react';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import './RecipeApp.css';
import axios from 'axios';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showcases: [
      ],
      showForm: false
    }
    
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  componentDidMount(){
     axios.get("https://thinlyslicedplasticbag.herokuapp.com/get").then(res=>{
                console.log(res)
        this.setState({showcases:res.data.allEntries})
     })
  }
  
  handleSave(recipe) {
    console.log(recipe)
    axios.post("https://thinlyslicedplasticbag.herokuapp.com/add", {recipe}).then(res=>{
      
    console.log(res)
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        showcases: [...this.state.showcases, newRecipe],
        showForm: false
      }
    });
  })
    
  }
  
  onDelete(_id) {
    console.log(_id)
    axios.delete("https://thinlyslicedplasticbag.herokuapp.com/deleteCard",{data:{ "cardToDelete":_id}}).then(res=>{console.log(res)})
    const showcases = this.state.showcases.filter(r => r._id !== _id);
    this.setState({showcases});
  }
  
  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        
        <Navbar onNewShowcase={() => this.setState({showForm: true})} />
        { showForm ?
            <RecipeInput
              instructions={this.props.instructions} 
              img={this.props.img}
              onSave={this.handleSave}
              onClose={() => this.setState({showForm: false})}  
            /> :
            null }
<RecipeList onDelete={this.onDelete} showcases={this.state.showcases} />

        

       
      </div>
    );
  }
}

export default RecipeApp;
