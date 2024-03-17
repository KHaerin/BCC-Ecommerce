import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from "./components/About/About";
import Contact from './components/Contact/Contact';
import Shop from './components/Shop/Shop';
function App() {
 
  return (
    <>
     <header>
            <nav className="navbar mb-5">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">Logo</span>
                            <div className="menu">
                                <BrowserRouter>
                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active" aria-current="page">ABOUT</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/shop" className="nav-link">SHOP</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link">CONTACT</Link>
                                    </li>
                                </ul>
                                <Routes>
                                  <Route path="/" element={<About />} />
                                  <Route path="/shop" element={<Shop />} />
                                  <Route path="/contact" element={<Contact />} />
                                </Routes>
                                </BrowserRouter>
                            </div>

                            <div className="account-cart">
                                <ul className="nav justify-content-end">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Account</a>
                                    </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cart</a>
                            </li>
                         </ul>
                    </div>
                </div>
            </nav>
        </header>
    <About/>
    </>
  )
}

export default App;
