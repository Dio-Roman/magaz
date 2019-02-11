import {ADD_TO_CART, PLUS, MINUS, DELETE} from '../constants';

const cart = {
  list: [],
}

const products = (state=cart.list, {type, id, name, quantity, price}) => {
  switch (type) {
    case ADD_TO_CART: 
      return [
        ...state, {
            id, 
            name, 
            quantity,
            price,
        }
      ];
    case DELETE:
      return [...state].filter(el=>el.id!==id);
    case PLUS:
      return [...state].map(el=> {
        if (el.id == id) {
          el.quantity++
        }
        return el
      });
    case MINUS:
      return [...state].map(el=> {
        if (el.id == id) {
         --el.quantity
        }
        return el
      });

    default : 
      return state;
  }
}

export default products;