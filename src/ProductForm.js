import React, { Component } from 'react';
//import store from './store';

class ProductForm extends Component {
    constructor(){
        super();
        this.state = {input: ''};
    }
    render(){
        return(
            <form className = 'container'>
                <label>Product Name</label>
                <input type = 'text' />
                <button className = 'btn btn-primary'> Add </button>
            </form>
        )
    }
}

export default ProductForm;