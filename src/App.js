import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Avatar, Button } from 'antd';

import { getSum, addToCart } from './action'



import 'antd/dist/antd.css';



class App extends Component {

  render() {

    console.log(this.props);

    const { stock, sum, cart, toPay ,basket, inCart} = this.props;
    return (
      <div className="App">

<List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={stock}
      renderItem={(item,index) => {

        return (<List.Item>

          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design">{item.name}</a>}
            description={"Price : " + item.price  +   "  |  "  +  "in Stock: " + item.inStock}
          />
           <Button 
           disabled={item.inStock === 0} 
           onClick={()=>this.props.addToCart(item, index)}>{item.inStock === 0 ? "Sold out": "Add to Cart"}</Button>
  
        </List.Item>)
      }}
    />

        <p>
           You have {inCart} in your cart
        </p>


<List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={cart}
      renderItem={(item,index) => {

        return (<List.Item>

          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design">{item.name}</a>}
            description={"Price : " + item.price  +   "  |  "  +  "in Stock: " + item.inStock}
          />
        </List.Item>)
      }}
    />

        <p>
        {JSON.stringify(basket)}
        </p>
        <p>
        {JSON.stringify(cart)}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    stock: state.stock,
    sum: state.sum,
    cart: state.cart,
    toPay: state.toPay,
    basket: state.basket,
    inCart: state.inCart
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



{/* <button onClick={()=>this.props.getSum()}>Get toatal sum </button>
<div>{sum}</div>
<ul>
  {
    stock.map((item,index)=>  <li key={index}>
    
    <h1>name: {item.name}</h1>
    <p> price:  {item.price}</p>
    <p>in stock: {item.inStock}</p>
    <button disabled={item.inStock === 0} onClick={()=>this.props.addToCart(item,index)}>{item.inStock === 0 ? "Sold out": "Add to Cart"}</button>
    </li>)
  }
</ul> */}