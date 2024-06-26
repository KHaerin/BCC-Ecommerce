import {BrowserRouter, Routes, Route, Link, useLocation} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import RegSeller from './components/Account/Seller_Account/regSeller/regSeller';
import About from "./components/About/About";
import Contact from './components/Contact/Contact';
import Shop from './components/Shop/Shop';
import Top from './components/Shop/products/Top';
import Bottom from './components/Shop/products/Bottom';
import Account from './components/Account/Account';
import Footer from './components/Footer/Footer';
import Seller from './components/Account/Seller_Account/Seller';
import Products from './components/Account/Seller_Account/Seller_Menu/Products';
import AddProduct from './components/Account/Seller_Account/Seller_Menu/addproduct/addproduct';
import ProductLook from './components/Shop/product-page/productLook';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import Cart from './components/Shop/cart/cart';
import Header from './components/header/HeaderMenu';
import Admin from './components/admin/admin';
import Application from './components/admin/admin-menu/applications';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/checkout';
import "./App.css";
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setAdmin] = useState(false);

    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedIn');
        const admin_id = localStorage.getItem('userId');
        if(admin_id === '1'){
            setAdmin(true);
        }else{
            setAdmin('false');
        }
        if (storedLoginStatus === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLoginStatus = (status) => {
        setIsLoggedIn(status);
        localStorage.setItem('isLoggedIn', status);
    }

    const isAdminRoute = () => {
        return location.pathname.includes("/login/admin");
    }




  return (
    <>
    <BrowserRouter>
    {!isAdminRoute() &&<Header/>}
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/top" element={<Top />} />
            <Route path="/bottom" element={<Bottom />} />
            <Route path="/account" element={<Account/>}/>
            <Route path="/seller" element={<Seller/>} />
            <Route path="/seller/products" element={<Products />} />
            <Route path="/seller/products/addproducts" element={<AddProduct/>} />
            <Route path="/shop/productLook/:productId" element={<ProductLook/>} />
            <Route path="/login" element={<Login updateLoginStatus={handleLoginStatus} /> } />
            <Route path="/register" element={<Register/>} />
            <Route path="/shop/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/regSeller" element={<RegSeller/>} />
            <Route path="/login/admin" element={<Admin/>} />
            <Route path="/admin/application" element={<Application/>}  />
        </Routes>
    </BrowserRouter>
    {!isAdminRoute() && <Footer/>}
    </>
  )
}

export default App;
