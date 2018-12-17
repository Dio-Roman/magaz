import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Cart extends Component {
  handleMinusHelper = (e) => {
    this.props.handleMinus(e);
  }
  handlePlusHelper =  (e) => {
    this.props.handlePlus(e);
  }
  handleDelete = (e) => {
    this.props.deleteFromCart(e);
  }
  sendOrder = () => {
    let order = JSON.stringify(this.props.products);
    console.dir(order)
  }

  render() {
    return (
      <div>
        <ul>
        {this.props.products.length > 0 ? 
          this.props.products.map(elem => (
            <li key={elem.price}> 
              {elem.name} : 
              {elem.quantity>0 && <button id={elem.id} onClick={this.handleMinusHelper}> - </button> }
              {elem.quantity} 
              <button id={elem.id} onClick={this.handlePlusHelper}> + </button>
              <button id={elem.id} onClick={this.handleDelete}> Delete from Cart </button>
            </li>
          )) : <p>The cart is empty</p>}
        </ul>
        <p>Total price:{this.props.totalPrice} </p>
        <p>Total quantity:{this.props.totalQuantity}  </p>
        <button onClick={this.sendOrder}>Send the Order</button>
      </div>
    )
  }
}

Cart.PropTypes = {
  products: PropTypes.array,
  totalPrice: PropTypes.number,
  totalQuantity: PropTypes.number,
  handleMinus: PropTypes.func,
  handlePlus: PropTypes.func,
  deleteFromCart: PropTypes.func,
}