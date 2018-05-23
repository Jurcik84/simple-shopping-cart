import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSum, addToCart } from './action'

class App extends Component {

  render() {

    console.log(this.props);

    const { stock, sum, cart, toPay } = this.props;
    return (
      <div className="App">
        <button onClick={()=>this.props.getSum()}>Get toatal sum </button>
        <div>{sum}</div>
        <ul>
          {
            stock.map((item,index)=>  <li key={index}>
            
            <h1>name: {item.name}</h1>
            <p> price:  {item.price}</p>
            <p>in stock: {item.inStock}</p>
            <button disabled={item.inStock === 0} onClick={()=>this.props.addToCart(item,index)}>add to cart</button>
            </li>)
          }
        </ul>
        {JSON.stringify(cart)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    stock: state.stock,
    sum: state.sum,
    cart: state.cart,
    toPay: state.toPay
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSum: () => {
      dispatch(getSum())
    },
    addToCart: (item, index)=>{
      dispatch(addToCart(item,index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
