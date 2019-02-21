import {DISABLE,FETCH_REQUEST, FETCH_SUCCESS} from '../constants';

let initialState = [];

  /*{"id": "1", "name": "Sushi", "src": "http://www.mediterrasian.com/images/main/sushi_rolls.jpg", "price": 100, "quantity": 0, "disabled" : false},
  {"id": "2", "name": "Pizza", "src": "https://www.eda1.ru/upload/images/c6ab2.jpg","price": 250, "quantity": 0,  "disabled" : false},

function  dataFetch () {
  fetch('http://localhost:3000/testData.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log('мои данные : ', data)
    let initialState = data;
    return initialState

  })
}*/

const productsAssortiment = (state = initialState, {type, id, disabled, data}) => {
  switch (type) {
      case DISABLE :
        return [...state].map(el=> {
          if (el.id == id) {
            el.disabled = !el.disabled;
          }
          return el
        });

      // case FETCH_REQUEST :
      //   return { ...state, isFetching: true };

        case FETCH_SUCCESS :
        return [ 
          ...state, 
          // isFetching: false, 
          ...data
        ];  

      default : 
      return state;
  }
}
   

export default productsAssortiment;