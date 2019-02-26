import {ADD_TO_CART, PLUS, MINUS, DELETE, DISABLE, FETCH_SUCCESS} from '../constants';

export const addToCart = (id, name, quantity, price, disabled) => ({
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

export const setDisable = (id, type, disabled) => ({
  type: DISABLE,
  id,
  disabled
});

export const fetchData = (type, bool) => {
  return dispatch => {
    
    fetch('https://reactredux-shop.herokuapp.com/testData.json')
      .then(response => {
          return response.json()
       })
      .then(data => {
    // console.log('мои данные : ', data)
    dispatch({
      type: FETCH_SUCCESS,
      data,
    })
  })
  }
};
