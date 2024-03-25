import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About";
import Contact from './components/Contact/Contact';
import Shop from './components/Shop/Shop';
import Top from './components/Shop/products/Top';
import Bottom from './components/Shop/products/Bottom';
import Account from './components/Account/Account';
import Footer from './components/Footer/Footer';
import Seller from './components/Account/Seller_Account/Seller';
import "./App.css";
function App() {
 
  return (
    <>
    <BrowserRouter>
    <header>
            <nav className="navbar mb-5">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">Logo</span>
                            <div className="menu">
                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active" aria-current="page">ABOUT</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link to="/shop" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">SHOP</Link>
                                        <ul className='dropdown-menu dropdown-menu-hover'>
                                            <li><Link to="/top" className='dropdown-item'>Top</Link></li>
                                            <li><Link to="/bottom" className='dropdown-item'>Bottm</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link">CONTACT</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="account-cart">
                                <ul className="nav justify-content-end">
                                <li className="nav-item dropdown">
                                    <Link to="/account" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropwdown" aria-expanded="false">Account</Link>
                                        <ul className='dropdown-menu dropdown-menu-hover'>
                                            <li><Link to="/account" className='dropdown-item'>Account</Link></li>
                                            <li><Link to="/seller" className='dropdown-item'>Seller's Profile</Link></li>
                                            <li><a href="" className='dropdown-item disabled'>Logout</a></li>
                                        </ul>
                                    </li>          
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cart</a>
                            </li>
                         </ul>
                    </div>
                </div>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/top" element={<Top />} />
            <Route path="/bottom" element={<Bottom />} />
            <Route path="/account" element={<Account/>}/>
            <Route path="/seller" element={<Seller/>} />
        </Routes>

    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App;
