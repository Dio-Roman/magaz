import React, { Component } from 'react';
import {data} from '../Items';

export default class Product extends Component {
  constructor(props) {
    super(props);
  }

  handleClickAdd = (e) => {
    let item = e.target.value;
    let arrItem = item.split(',')
    let obj = {id:arrItem[0], name: arrItem[1] , quantity:+arrItem[2], price:+arrItem[3]};
    this.props.addToCart(obj);
    e.target.disabled = "true";
  }

  testClick = (node) => {
    this.firstRef  = node;
    console.log(this.firstRef)
    return     this.firstRef
  }
  
  render() {
    return (
      <main style={{display: "inline-grid",}}>
        {data.map(el=>(
          <div key={el.id}style={{display: "flex", border:"2px solid black"}}>
            <h2>{el.name}</h2>
            <img height="200" width="200" src={el.src} alt={el.name}/>
            <p>Price: {el.price} rub.</p>
            <button   value={[el.id, el.name, el.quantity, el.price]} onClick={this.handleClickAdd}>Add to Cart</button>
          </div>
        ))}
      </main>
    );
  }
}
