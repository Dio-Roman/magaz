import {DISABLE, FETCH_SUCCESS} from '../constants';

let initialState = [];

const productsAssortiment = (state = initialState, {type, id, disabled, data}) => {
  switch (type) {
      case DISABLE :
        return [...state].map(el=> {
          if (el.id == id) {
            el.disabled = !el.disabled;
          }
          return el
        });

        case FETCH_SUCCESS :
        return [ 
          ...state, 
          ...data
        ];  

      default : 
      return state;
  }
}
   
export default productsAssortiment;