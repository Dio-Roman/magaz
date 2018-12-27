import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {CartDiv, TotalPriceP, Btn, Number, Empty, Ul, PlusMinusBtn, Counter, Delete} from './cartStyle';

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
      <CartDiv>
        <h1>Your Cart</h1>
        <Ul>
        {this.props.products.length > 0 ? 
          this.props.products.map(elem => (
            <li key={elem.price}> 
              {elem.name} :  {` `} 
              <Counter>
                {elem.quantity>0 && <PlusMinusBtn id={elem.id} onClick={this.handleMinusHelper}> - </PlusMinusBtn> }
                <Number>{elem.quantity} </Number>
                <PlusMinusBtn id={elem.id} onClick={this.handlePlusHelper}> + </PlusMinusBtn>
              </Counter>
              <Delete id={elem.id} onClick={this.handleDelete}> Delete </Delete>
            </li>
          )) : <Empty>The cart is empty</Empty>}
        </Ul>
        <br/>
        <TotalPriceP>Total price:{' '}<Number>{this.props.totalPrice} rub.</Number> </TotalPriceP>
        <p>Total quantity:{' '}<Number>{this.props.totalQuantity} pcs.</Number>  </p>
        <Btn onClick={this.sendOrder} title="Весь заказ в формате JSON в консоле">Send the Order</Btn>
      </CartDiv>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  totalPrice: PropTypes.number,
  totalQuantity: PropTypes.number,
  handleMinus: PropTypes.func,
  handlePlus: PropTypes.func,
  deleteFromCart: PropTypes.func,
}