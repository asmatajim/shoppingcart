import React from 'react'
import Navbar from './components/Navbar/Navbar';
import "./components/index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Product  from './pages/Product';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';

const App = () => {
  return (
    <div>

        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          {/* <Route path='/mens' element={<ShopCategory category="mens"/>}/> */}
          <Route path='/womens' element={<ShopCategory category="women" />}/>
          {/* <Route path='/kids' element={<ShopCategory />}/> */}
          <Route path='/product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>

        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App