import React, { Component } from 'react';


class AddProduct extends Component {
   constructor(props){
       super(props);
       this.onSubmit= this.onSubmit.bind(this);
   }
   
    onSubmit(event){
        event.preventDefault();
        this.props.onAdd(this.nameInput.value, this.priceInput.value);
        
        this.nameInput.value='';
        this.priceInput.value='';
    }
   render(){
      
        return(
        <form onSubmit={this.onSubmit}>
            <h3>WHAT HAS CHANGED</h3>
            <textarea placeholder="STUFF YOU WANT TO GET RID OF" ref={nameInput=> this.nameInput=nameInput}></textarea>
            <input placeholder="SEVERITY" ref={priceInput=> this.priceInput= priceInput}></input>
            <button>Add</button>
            <hr/>
            </form> 
      )}
    }
    
   

export default AddProduct;
