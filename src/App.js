import React, { Component} from 'react';
//import { render } from 'react-dom';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import store from './store';

class App extends Component{
  constructor(props){
    super();
    this.state = {products: store.getState().products};
  }
  render(){
    return (
      <div className='container'>
        <h1> Acme </h1>
        <ProductForm />
        <ProductList />
      </div> 
    );
  }
}

export default App;