import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {data} from '../../data';
import {Main, Card, Btn, PriceP, NameH2} from './productStyle';

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
            <NameH2>{el.name}</NameH2>
            <img height="200" width="200" src={el.src} alt={el.name}/>
            <PriceP>Price: {el.price} rub.</PriceP>
            <Btn   value={[el.id, el.name, el.quantity, el.price]} onClick={this.handleClickAdd}>Add to Cart</Btn>
          </Card>
        ))}
      </Main>
    );
  }
}
Product.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func
}