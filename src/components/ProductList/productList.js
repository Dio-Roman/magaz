import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../../actions/actionCreator';
import PropTypes from 'prop-types';

import {mainStyle} from './style';
import Product from '../../containers/Product/product';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  static propTypes = {
    fetchData: PropTypes.func,
    prodList: PropTypes.array,
  }

  render () {
    const {prodList} = this.props;
    return (
        <main style={mainStyle}>
            {prodList.map(el=>(
              <Product
                key = {el.id}
                id = {el.id}
                name = {el.name}
                src = {el.src}
                price = {el.price}
                quantity = {el.quantity}
                disabled = {el.disabled}
              />
            ))}
          </main>
    
    )
  }
}

  export default connect (state =>({
    prodList : state.productsAssortiment,
  }), {fetchData})(ProductList);
  
