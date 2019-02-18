import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {CartDiv, TotalPriceP, Btn, Number, Empty, Ul, PlusMinusBtn, Counter, Delete} from './cartStyle';
import {connect} from 'react-redux';
import {deleteFromCart, plusItem, minusItem} from '../../actions/actionCreator';


class Cart extends Component {
  sumQuantity = () => {
    const {productsInCart} = this.props;
    return productsInCart.reduce (function (acc, cur) { 
      return acc + cur.quantity
    }, 0
    )
  };

  sumPrice = () => {
    const {productsInCart} = this.props;
    return productsInCart.reduce (function (acc, cur) { 
        return acc + cur.price*cur.quantity
      }, 0
      )
  }

  sendOrder = () => {
    const {productsInCart} = this.props;
    let order = JSON.stringify(productsInCart);
    console.log("Your order:", order,this.sumPrice(), "rub.")
  }

  static propTypes = {
    productsInCart: PropTypes.array,
    deleteFromCart: PropTypes.func,
    plusItem: PropTypes.func,
    minusItem: PropTypes.func,
  }

  render() {
        const {productsInCart, deleteFromCart, plusItem, minusItem } = this.props;
        
    return (
      <CartDiv>
        <h1>Your Cart</h1>
        <Ul>
        {productsInCart.length > 0 ? 
          productsInCart.map(elem => (
            <li key={elem.price}> 
              {elem.name} :  {` `} 
              <Counter >
                {elem.quantity>0 && <PlusMinusBtn id={elem.id} onClick={()=>minusItem(elem.id)}> - </PlusMinusBtn> }
                <Number>{elem.quantity} </Number>
                <PlusMinusBtn id={elem.id} onClick={()=>plusItem(elem.id)}> + </PlusMinusBtn>
              </Counter>
              <Delete id={elem.id} onClick={()=>deleteFromCart(elem.id)}> Delete </Delete>
            </li>
          )) : <Empty>The cart is empty</Empty>}
        </Ul>
        <br/>
        <TotalPriceP>Total price:{' '}<Number>{this.sumPrice()} rub.</Number> </TotalPriceP>
        <p>Total quantity:{' '}<Number>{this.sumQuantity()} pcs.</Number>  </p>
        <Btn onClick={this.sendOrder} title="Весь заказ в формате JSON в консоле">Send the Order</Btn>
      </CartDiv>
    )
  }
}

export default connect (state => ({
  productsInCart: state.products,
  }), {deleteFromCart, plusItem, minusItem})(Cart);