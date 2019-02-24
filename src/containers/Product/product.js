import React,  {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, Btn, PriceP, NameH2} from './productStyle';
import {addToCart, setDisable} from '../../actions/actionCreator';
import {connect} from 'react-redux';

class Product extends Component {
  addProduct = () => {
    const {id, name, quantity, price, addToCart, setDisable} = this.props;
    addToCart (id, name,  quantity, price );
    setDisable (id);
  }

  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    src: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    addToCart: PropTypes.func,
    setDisable: PropTypes.func,
    disabled: PropTypes.bool,
  }

  render () {
    const {name, src, price, disabled} = this.props;

    return (
      <Card>
        <NameH2>{name}{console.log({name})}</NameH2>
        <img height="200" width="200" src={src} alt={name}/>
        <PriceP>Price: {price} rub.</PriceP>
        <Btn onClick={this.addProduct} disabled={disabled}>Add to Cart</Btn>
      </Card>)
  }
}

export default connect (null, {addToCart, setDisable})(Product);
