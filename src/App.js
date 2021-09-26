// import logo from './logo.svg';
import './App.css';

import BasicMenu from './components/BasicMenu'
import Header from './components/Header'
import Categories from './components/Categories'
import Products from './components/Products'

import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
    <BasicMenu />
    <Categories/>
    <Products/>

    <Footer/>

    </div>
  );
}

export default App;
