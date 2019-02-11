import React from 'react';

import Navigate from '../Navigate/navigate';
import ProductList from '../ProductList/productList';
import Cart from '../Cart/cart'

const Shop = () => { 
    return (
      <>
        <Navigate/>
        <ProductList/>
        <Cart/>
      </>
    );
  }

export default Shop;
