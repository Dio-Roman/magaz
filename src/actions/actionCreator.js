import {ADD_TO_CART, PLUS, MINUS, DELETE} from '../constants';

export const addToCart = (id, name, quantity, price) => ({
  type: ADD_TO_CART,
  id,
  name, 
  quantity, 
  price,
});

export const deleteFromCart = (id, type) => ({
  type: DELETE,
  id,
});

export const plusItem = (id, type) => ({
  type: PLUS,
  id,
});

export const minusItem = (id, type) => ({
  type: MINUS,
  id,
});

