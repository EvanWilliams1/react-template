import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import {AddProduct, RemoveProduct, SetProducts} from './constants';

const reducer = (state = {products:[]}, action) => {
    let newState;
    switch(action.type){
        case 'Add_Product':
            newState = Object.assign({}, state);
            newState.products.push(action.product);
            break;
        case 'Remove_Product':
            newState = Object.assign({}, state);
            myArr = newState.products;
            newState = myArr.filter(item => item !== product.id);
            break;
        case 'Set_Products':
            newState = Object.assign({}, state, {products: action.products});
            break;
        default : 
        newState = state;
    }
    return newState;
};

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(()=>console.log(store.getState()));


store.dispatch((dispatch)=>{
    axios.get('/api/products')
    .then( response => response.data)
    .then( products => dispatch({type: 'Set_Products', products}))
});

export default store;