import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';
import axios from 'axios';

const products = [
   {
     name:'WHAT YOU WANT TO SAY',
     price:200
   }
  
];

localStorage.setItem('products', JSON.stringify(products));

class CrudApp extends Component {
   constructor(props){
     super(props);
     this.state={
       products:JSON.parse(localStorage.getItem('products'))
     };
     
     this.onAdd=this.onAdd.bind(this);
     this.onDelete= this.onDelete.bind(this);
     this.onEditSubmit= this.onEditSubmit.bind(this);
     this.getFromMlab= this.getFromMlab.bind(this);
   }

    componentDidMount(){
      let mproducts= this.getFromMlab();
      console.log(mproducts);
      //const products = this.getProducts();
     // console.log(products);
      //this.setState({products});
    }
    
    postToMlab=(name,price)=>{
      axios.post('http://localhost:8080/add', {
        name:name,
        price:price
     })
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });
    }
    getFromMlab=()=>{
      axios.get('http://localhost:8080/get')
     .then( (response) =>{
       console.log(response);
       this.setState({products:response.data.allEntries});
       //return response.data.allEntries
     })
     .catch( (error)=> {
       console.log(error);
     });
    }
    

     getProducts(){
      return this.state.products ;

     }

     onAdd(name, price){
      const products= this.getProducts();
     this.postToMlab(name, price)
      products.push({
         name,
         price
      });
       
      this.setState({products});
     }
     
     onDelete(name,price){
        const products= this.getProducts();

        const filteredProducts= products.filter(product=>{
          return product.name !== name;
        });

         this.setState({products:filteredProducts});
     }

     
      onEditSubmit(name,price, originalName){
        let products= this.getProducts();
        products= products.map(product=>{
          if(product.name===originalName){
            product.name=name;
            product.price=price;
          }
          return product;
        });

        this.setState({products});
      }

   render(){
        
        return(<div className="crudApp">
       
          <br/> <br/> <br/> <br/>
            <AddProduct
              onAdd={this.onAdd}
            />

           {
             this.state.products.map(product=> {
               return(
                 <ProductItem
                    key={product.name}
                    {...product}
                    onDelete={this.onDelete}
                    onEditSubmit={this.onEditSubmit}
                 />
               );
             })
           }


       </div>
      )}
    }
    
   

export default CrudApp;
