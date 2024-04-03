import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";


import AccountIcon from '../../components/icons/header-icon/user.png';
import HeaderAcc from './accDropDown';
import AddCart from '../addCart/addCart';


export default function Header(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedIn');
        const admin_user = localStorage.getItem('userId');
        if(admin_user === '1'){
            setIsAdmin(true);
        }else{
            setIsAdmin(false);
        }

        if (storedLoginStatus === 'true') {
            setIsLoggedIn(true);
        }
    }, []);
    
    return( 

        <>
        <header>

        <nav className="navbar mb-5">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Logo</span>
                        <div className="menu">
                            <ul className="nav justify-content-center">
                            <li className="nav-item dropdown">
                                    <Link to="/" className="nav-link active dropdown-toggle" id="headerLinks"  role="button" data-bs-toggle="dropdown" aria-current="page" aria-expanded="false">SHOP</Link>
                                    <ul className='dropdown-menu dropdown-menu-hover'>
                                        <li><Link to="/top" className='dropdown-item'>Top</Link></li>
                                        <li><Link to="/bottom" className='dropdown-item'>Bottm</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link" id="headerLinks" >ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link" id="headerLinks">CONTACT</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="account-cart">
                            <ul className="nav justify-content-end">
                                {isLoggedIn && (
                                    <HeaderAcc/>
                                )}
                            {!isLoggedIn && (
                                <li className='nav-item dropdown'>
                                    <Link to="#" className="nav-link dropdown-toggle pointers-events-none" id="headerLinks" role="button" data-bs-toggle="dropwdown" aria-expanded="false" aria-disabled><img src={AccountIcon}  alt="" id="accIcon"/></Link>
                                    <ul className="dropdown-menu dropdown-menu-hover"> 
                                        <li className="dropdown-item"><Link to="/login" className='nav-link' >Login</Link></li>
                                        <li className='dropdown-item'><Link to="/register" className='nav-link'>Sign Up</Link></li>
                                    </ul>
                                    
                                </li>
                            )}
                        <li className="nav-item">
                                {!isAdmin && (
                                     <AddCart/>
                                )}
    
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>
        </>

    )
}