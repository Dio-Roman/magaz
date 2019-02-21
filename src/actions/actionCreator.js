import {ADD_TO_CART, PLUS, MINUS, DELETE, DISABLE, FETCH_REQUEST, FETCH_SUCCESS} from '../constants';

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


//  function isLoading () {
//   return {
//       type: 'FETCH_REQUEST',
//       // isLoading: bool
//   };
// }


export const fetchData = (type, bool) => {
  return dispatch => {
    
    // dispatch(isLoading())

    fetch('http://localhost:3000/testData.json')
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