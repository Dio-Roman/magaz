import React, { Component, Fragment } from 'react';


export default class Cart extends Component {
  constructor(props) {
    super(props);

  // this.handleMinusHelper = this.handleMinusHelper.bind(this)
  // this.handlePlusHelper = this.handlePlusHelper.bind(this)
  // this.handleDelete = this.handleDelete.bind(this)
  } 
  
  handleMinusHelper = (e) => {
    this.props.handleMinus(e);
  }
  handlePlusHelper =  (e) => {
    this.props.handlePlus(e);
  }
  handleDelete = (e) => {
    this.props.deleteFromCart(e);
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
          )) : <p>Корзина пуста</p>}
          
        </ul>
        
        <p>Итоговая сумма:{this.props.totalPrice} </p>
        <p>Количество позиций:{this.props.totalQuantity}  </p>
        <button>Заказать</button>
      </div>
    )
  }
}