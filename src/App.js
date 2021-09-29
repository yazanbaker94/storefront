// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import BasicMenu from './components/BasicMenu'
import Header from './components/Header'

import SimpleCart from './components/SimpleCart';

import ProductDetails from './components/ProductDetails';
import ProductAndCategory from './components/ProductAndCategory';

import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Route
} from "react-router-dom";


function App() {
  const [showCart, setShowCart] = useState(false);

  function handleShowCart() {
    setShowCart(true)
  }

  return (
    <div className="App">
      <Header show={handleShowCart}/>
      {showCart && <SimpleCart/>}
    <BasicMenu />
    

    <Router>
    <Switch>
      <Route exact path="/">
        <ProductAndCategory />
      </Route>
      <Route exact path="/products/:id">
        <ProductDetails />
      </Route>
    </Switch>
  </Router>

    <Footer/>

    </div>
  );
}

export default App;
