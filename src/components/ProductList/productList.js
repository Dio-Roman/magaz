import React, {Component} from 'react';
// import {data} from '../../data';
import {connect} from 'react-redux';
import {fetchData} from '../../actions/actionCreator';


import {mainStyle} from './style';
import Product from '../../containers/Product/product';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
      //!!! бесклнечный вызов !!!


  render () {
    const {prodList, fetchData } = this.props;
    return (
        <main style={mainStyle}>
            {/*!prodList.isFetching ? <p> "Loading ... Wait..."</p> : */
              prodList.map(el=>(
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
  
// export default ProductList;