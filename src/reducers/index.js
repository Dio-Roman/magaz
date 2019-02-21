import {combineReducers} from 'redux';
import products from './products';
import productsAssortiment from './productAssortiment';


const rootreducer = combineReducers ({products, productsAssortiment});

export default rootreducer;