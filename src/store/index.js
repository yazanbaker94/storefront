// Create my Redux store here 
import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import categoryReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

//1-  combine reducers in one reducer 
let reducers = combineReducers({ categories: categoryReducer, products: productsReducer, cart: cartReducer });

// 2- createStore 
const store = () => {
    return createStore(reducers, composeWithDevTools())
}

// 3 export 
export default store();

