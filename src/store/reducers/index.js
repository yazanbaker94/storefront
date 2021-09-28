// Create my Redux store here 
import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import categoryReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({ categories: categoryReducer, products: productsReducer, cart: cartReducer });

function store() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
export default store();

