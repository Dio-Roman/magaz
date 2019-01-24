import React, { Component } from 'react';

import Navigate from '../Navigate/navigate';
import {ProductList} from '../ProductList/productList';
import Cart from '../Cart/cart'

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
       products: [],
       totalQuantity: 0,
       totalPrice: 0,
    }
  }
  
  sumPrice = () => {
    this.setState ({
      totalPrice: this.state.products.reduce (function (acc, cur) { 
        return acc + cur.price*cur.quantity
      }, 0
      )
    })
  }

  sumQuantity = () => {
    this.setState ({
      totalQuantity: this.state.products.reduce (function (acc, cur) { 
        return acc + cur.quantity
      }, 0
      )
    })
  }

  handleMinus = (clickId) => {
    this.setState ({
      products: this.state.products.map (el => {
       if (el.id == clickId.target.id) {
         --el.quantity
       }
       return el
     }),
     }
   )
   this.sumQuantity ();
   this.sumPrice ()
  } 

  handlePlus = (clickId)=> {
    this.setState ({
       products: this.state.products.map (el => {
        if (el.id == clickId.target.id) {
          el.quantity++
        }
        return el
      }),
      }
    )
    this.sumQuantity ();
    this.sumPrice ()
  }

  addToCart = (newProd) => {
    this.setState ({
      products: this.state.products.concat([newProd])
    })
  }

  deleteFromCart = (deleteProd) => {
    let numberOfElem ;
    this.state.products.map (el => {
        if (el.id == deleteProd.target.id) {
          numberOfElem = this.state.products.indexOf(el);
          return numberOfElem
        }
      })
    let newProdState1 = this.state.products.splice(0, numberOfElem);
    let newProdState2 = this.state.products.splice( numberOfElem+1, this.state.products.length-(numberOfElem+1));
    let newProdState = newProdState1.concat(newProdState2);
    this.setState ({
      products: newProdState,
      totalQuantity: newProdState.reduce (function (acc, cur) { 
        return acc + cur.quantity
      }, 0
      ),
      totalPrice: newProdState.reduce (function (acc, cur) { 
        return acc + cur.price*cur.quantity
      }, 0
      )
    })
  }

  render() {
    const {products, totalPrice, totalQuantity} = this.state;
    return (
      <>
        <Navigate/>
        <ProductList 
          addToCart={this.addToCart}
        />
        <Cart 
          products={products}
          totalPrice={totalPrice}
          totalQuantity={totalQuantity}
          handleMinus={this.handleMinus}
          handlePlus={this.handlePlus}
          deleteFromCart={this.deleteFromCart}
        />
      </>
    );
  }
}

export default Shop;
