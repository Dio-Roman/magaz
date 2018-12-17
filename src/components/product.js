import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {data} from '../data';
import Main from './main';
import Card from './card';
// import styled from 'styled-components';

// const Main = styled.div`
// display: "inline-grid",
// `;

export default class Product extends Component {
  handleClickAdd = (e) => {
    let item = e.target.value;
    let arrItem = item.split(',')
    let obj = {id:arrItem[0], name: arrItem[1] , quantity:+arrItem[2], price:+arrItem[3]};
    this.props.addToCart(obj);
    e.target.disabled = "true";
  }
  
  render() {
    return (
      <Main>
        {data.map(el=>(
          <Card key={el.id}>
            <h2>{el.name}</h2>
            <img height="200" width="200" src={el.src} alt={el.name}/>
            <p>Price: {el.price} rub.</p>
            <button   value={[el.id, el.name, el.quantity, el.price]} onClick={this.handleClickAdd}>Add to Cart</button>
          </Card>
        ))}
      </Main>
    );
  }
}
Product.PropTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func
}