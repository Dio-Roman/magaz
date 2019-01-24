import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, Btn, PriceP, NameH2} from './productStyle';

class Product extends Component {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    src: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    onClick: PropTypes.func,
  }
  render () {
    const { id, name, src, price, quantity, onClick} = this.props;
    return (
      <Card>
        <NameH2>{name}</NameH2>
        <img height="200" width="200" src={src} alt={name}/>
        <PriceP>Price: {price} rub.</PriceP>
        <Btn   value={[id, name, quantity,price]} onClick={onClick}>Add to Cart</Btn>
      </Card>
    )
  }
}
export default Product;