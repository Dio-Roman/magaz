import React, { Component, Fragment } from 'react';


import {data} from './Items';
import './App.css';
import Product from './components/product';
import Cart from './components/cart'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       products: [],
       totalQuantity: 0,
       totalPrice: 0,
      //  disable: false
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
    //  totalQuantity: this.state.totalQuantity-1
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
      // totalQuantity: this.state.totalQuantity+1
      }
    )
    this.sumQuantity ();
    this.sumPrice ()
  }
  
  isinCart = () => {
    this.state.products.forEach (el => {
      console.log(el.id)
    })
  }

  addToCart = (newProd) => {
    this.setState ({
      products: this.state.products.concat([newProd])
    })
  }

  deleteFromCart = (deleteProd) => {
    let numberOfElem ;
    // console.log(deleteProd.target.id);
    this.state.products.map (el => {
        // let newProducts = [];
        if (el.id == deleteProd.target.id) {
          el.button.disable = 'false';
          numberOfElem = this.state.products.indexOf(el);
          // console.log(numberOfElem)
          return numberOfElem
        }
      })
    let newProdState1 = this.state.products.splice(0, numberOfElem);
    let newProdState2 = this.state.products.splice( numberOfElem+1, this.state.products.length-(numberOfElem+1));
    let newProdState = newProdState1.concat(newProdState2);
    // console.log (newProdS  tate)
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
    const {products, totalPrice, totalQuantity, disable} = this.state;
    return (
      <>
        <Product 
          data={data}
          products={products}
          addToCart={this.addToCart}
          disable={disable}/>
          
        <Cart 
          products={products}
          totalPrice={totalPrice}
          totalQuantity={totalQuantity}
          handleMinus={this.handleMinus}
          handlePlus={this.handlePlus}
          deleteFromCart={this.deleteFromCart}/>
      </>
    );
  }
}

export default App;
