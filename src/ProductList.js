import React, { Component } from 'react';
import store from './store';

class ProductsList extends Component{
    constructor(){
        super();
        this.state = {products: store.getState().products};
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
    }
    componentWillUnmout(){
        this.unsubscribe();
    }

    render(){
        console.log(this.state)
        console.log(this.state.products);
        return(
            <div className = 'hr'>
                <ul>
                    {
                        this.state.products.map(product => <li key={product.id}>{product.name}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default ProductsList;