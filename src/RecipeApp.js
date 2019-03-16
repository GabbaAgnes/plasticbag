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
       {
          
          instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
          points: ["pasta", "8 cups water", "1 box spaghetti"],
          img: "./images/1.png"
        },
         {
          
         
          instructions: "Combine ice cream and milk.  Blend until creamy",
          points: ["2 Scoops Ice cream", "8 ounces milk"],
          img: "https://i-h1.pinimg.com/564x/16/3e/76/163e769f56ea106011732092480bd7b9.jpg"
        },
        /*{ 
         
          title: "Avocado Toast",
          instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          points: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          img: "https://i-h1.pinimg.com/564x/73/f5/e6/73f5e634bf6c517b4d46b944513288e9.jpg?b=t"
        }*/
      ],
      //nextRecipeId: 3,
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
        <RecipeList onDelete={this.onDelete} showcases={this.state.showcases} />
        <Navbar onNewShowcase={() => this.setState({showForm: true})} />
        { showForm ?
            <RecipeInput
              instructions={this.props.instructions} 
              onSave={this.handleSave}
              onClose={() => this.setState({showForm: false})}  
            /> :
            null }
        

       
      </div>
    );
  }
}

export default RecipeApp;
