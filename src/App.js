import React from 'react';
import './App.css';
import NAvbar from './Components/Navbar/NAvbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Product from './Pages/Product'
import Fotter from './Components/Footer/Fotter';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <NAvbar />
        <Routes>
            <Route path='/' element={<Shop />} />
            <Route path="/men" element={<ShopCategory  banner={men_banner} category="men"/>} />
            <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>} />
            <Route path="/kid" element={<ShopCategory banner={kids_banner} category="kid"/>} />
            <Route path="/product" element={<Product />}>
              <Route path=':productId' element={<Product />} /> 
            </Route>
            <Route path='/Cart' element={<Cart />}/>
            <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Fotter />
        </BrowserRouter>
    </div>
  );
}

export default App;
