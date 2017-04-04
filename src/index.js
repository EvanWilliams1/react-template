import React, { Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import axios from 'axios';



const root = document.getElementById('root');

class App extends Component{
  constructor(){
    super();
    this.state = { products: [] };
  }
  componentDidMount(){
    axios.get('/api/products')
      .then(response => response.data)
      .then(products => this.setState({ products }));

  }
  render(){
    return (
      <div className='container'>
        <Nav pathname={ this.props.router.location.pathname } products={ this.state.products }/>
        { React.cloneElement(this.props.children, this.state) }
      </div> 
    );
  }
}

const Nav = ({ pathname, products })=> {
  const active = (_pathname)=> pathname === _pathname;

  return (
    <ul className='nav nav-tabs' style={{ marginBottom: '10px' }}>
      <li className={ active('/') ? 'active': ''}>
        <Link to='/'>Home</Link>
      </li>
      <li className={ active('/products') ? 'active': ''}>
        <Link to='/products'>Products ({ products.length })</Link>
      </li>
    </ul>
  );
};

const Home = ()=> <div className='well'>Home</div>;

const Products = ( { products })=> (
  <div className='well'>
    <ul>
      { products.map( product => <li key={product.id}>{ product.name }</li> ) }
    </ul>
  </div>
);

 

const routes = (
  <Route path='/' component={ App }>
    <IndexRoute component={ Home } />
    <Route path='products' component={ Products } />
  </Route>
);


render(<Router routes={ routes } history={ hashHistory } />, root);
