// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import BasicMenu from './components/BasicMenu'
import Header from './components/Header'
import Categories from './components/Categories'
import Products from './components/Products'
import SimpleCart from './components/SimpleCart';

import Footer from './components/Footer'
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
    <Categories/>
    <Products/>

    <Footer/>

    </div>
  );
}

export default App;
