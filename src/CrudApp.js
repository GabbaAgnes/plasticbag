import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';

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

   }

    componentWillMount(){
      const products = this.getProducts();
      this.setState({products});
    }
    
     getProducts(){
      return this.state.products ;

     }

     onAdd(name, price){
      const products= this.getProducts();

      products.push({
         name,
         price
      });
       
      this.setState({products});
     }
     
     onDelete(name){
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
