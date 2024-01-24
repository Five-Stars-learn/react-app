import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductsList from './components/ProductsList';
import {Routes, Route} from "react-router-dom";
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import CartApp from './components/CartApp';

const App =()=>{
  
    return (
    <>
    <div className="App">
     <Navbar/> 
    <Routes>
    <Route path="cartApp" element={<CartApp/>}/>
    <Route path="cart" element={<Cart />}/>
    <Route path="/" element={
         <>
     <Slider/>
     <ProductsList/>
   
    </>
      }/>
      
      <Route path="about" element={<About/>}/>
      <Route path="product/:productId" element={<ProductDetails/>}/>
    </Routes>
    </div>
    
    </>
  );
}

export default App;

