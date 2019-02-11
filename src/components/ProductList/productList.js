import React from 'react';
import {data} from '../../data';
import {mainStyle} from './style';
import Product from '../Product/product';

const  ProductList = () => {
    return (
      <main style={mainStyle}>
        {data.map(el=>(
          <Product
            key = {el.id}
            id = {el.id}
            name = {el.name}
            src = {el.src}
            price = {el.price}
            quantity = {el.quantity}
          />
        ))}
      </main>
    );
  }

export default ProductList;