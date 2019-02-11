import React,  {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, Btn, PriceP, NameH2} from './productStyle';
import {addToCart} from '../../actions/actionCreator';
import {connect} from 'react-redux';

class Product extends Component {
  addProduct = (e) => {
    const {id, name, quantity, price, addToCart} = this.props;
    addToCart (id, name,  quantity, price );
    e.target.disabled = "true"
  }

  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    src: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    addToCart: PropTypes.func,
  }

  render () {
    const {name, src, price} = this.props;

    return (
      <Card>
        <NameH2>{name}{console.log({name})}</NameH2>
        <img height="200" width="200" src={src} alt={name}/>
        <PriceP>Price: {price} rub.</PriceP>
        <Btn onClick={this.addProduct}>Add to Cart</Btn>
      </Card>)
  }
}

export default connect (null, {addToCart})(Product);
