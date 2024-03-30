import './Shop.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import RightArrow from '../icons/arrow-right.png';
import LeftArrow from '../icons/left-arrow.png';

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;

    useEffect(() => {
        fetchProducts();
    }, [currentPage]); 

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost/hurb/products.php');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

   
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + (currentPage == 2 ? 3: productsPerPage);

    const totalPages = Math.ceil(products.length / productsPerPage);

  
    const productsToDisplay = currentPage === 1 ? productsPerPage : 3;

    return (
        <>
            <div className="container-fluid">
                <h1 className="text-center" id="newArrivals">New Arrivals</h1>
                <div className="row row-cols-1">
                    <div className="col">
                        <span id="sortList" className='d-flex justify-content-end'>Sort:</span>
                    </div>
                    <div className="col-lg-12 col-md-5 col-sm-2">
                        <span id="categoryTXT" className='d-flex mb-2'>Shirts</span>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col d-flex align-items-center justify-content-center">
                        <hr className="border border-dark border-1 opacity-40" id="hr3" />
                    </div>
                </div>

                <div className="container-fluid product-display d-flex justify-content-center align-items-center">
                    <div className="arrow col d-flex justify-content-center align-items-center">
                        {currentPage > 1 && (
                            <button className='btn' onClick={prevPage}><img src={LeftArrow} alt="" id="arrowBtn" /></button>
                        )}
                    </div>
                    <div className="row row-cols " id="Products-Area">
                        {products
                            .filter(product =>
                                product.product_category === 'Top'
                            )
                            .slice(startIndex, endIndex) 
                                // xs (for phones - screens less than 768px wide)
                                // sm (for tablets - screens equal to or greater than 768px wide)
                                // md (for small laptops - screens equal to or greater than 992px wide)
                                // lg (for laptops and desktops - screens equal to or greater than 1200px wide)
                            .map((product, index) => (
                                    <Link to={`/shop/productLook/${product.product_id}`} className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center text-decoration-none mb-5" key={product.product_id}>
                                    <div className="card" id="productCard">
                                        <div className="container d-flex justify-content-center align-items-center pt-3">
                                            <div className="product-bg d-flex justify-content-center">
                                                <img src={`http://localhost/hurb/${product.product_img}`} alt={product.product_name} className="card-img-top img-fluid img-thumbnail" id="shopProduct-image" />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold  ">{product.product_name}</h5>
                                            <h5 className="card-text">{product.product_price}</h5>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    {currentPage === 2 && (
                         <div className="col">
                         <Link to="/top" className="col d-flex justify-content-center align-items-center text-decoration-none mb-5" >
                                 <div className="card" id="productCard">
                                     <div className="container d-flex justify-content-center align-items-center pt-3">
                                         <div className="product-bg d-flex justify-content-center">
                                             <img src="" alt="" className="card-img-top" id="shopProduct-image" />
                                         </div>
                                     </div>
                                     <div className="card-body">
                                         <h5 className="card-title">VIEW MORE</h5>
                                     </div>
                                 </div>
                         </Link>
                        </div>
                    )}
                    </div>
                   
                    <div className="arrow col d-flex justify-content-center align-items-center  d-md-block  d-lg-block d-none">
                        {currentPage < totalPages && (
                            <button className='btn' onClick={nextPage}><img src={RightArrow} alt="" id="arrowBtn" /></button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
