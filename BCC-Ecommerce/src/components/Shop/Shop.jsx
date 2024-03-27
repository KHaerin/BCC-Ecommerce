import './Shop.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
export default function Shop(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async() => {
            try{
                const response = await axios.get('http://localhost/hurb/products.php');
                setProducts(response.data);
            }catch(error){
                console.error('Error fetching data:', error);
            }
        };
        fetchProducts();
    }, []);

    return(
        <>
        <div className="container-fluid">
            <h1 className="text-center">New Arrivals</h1>
            <div className="row row-cols-1">
                <div className="col">
                    <span id="sortList" className='d-flex justify-content-end'>Sort:</span>
                </div>
                <div className="col">
                    <span id="categoryTXT" className='d-flex mb-2'>Shirts</span>
                </div>
            </div>
           
            <div className="row mb-4">
                <div className="col d-flex align-items-center justify-content-center">
                    <hr className="border border-dark border-1 opacity-40" id="hr3"/>
                </div>
            </div>
            <div className="row row-cols-4" id="Products-Area">
                {products
                .filter(product => 
                    product.product_category === 'Top' &&
                    (product.product_sub_category === 'Shirts' ||
                    product.product_sub_category === 'T-Shirts'||
                    product.product_sub_category === 'Polos')
                    )
                .slice(0, 4)
                .map((product, index) => (
                    <Link to="/shop/productLook" className="col d-flex justify-content-center align-items-center text-decoration-none mb-5" key={product.product_id}>
                         <div className="card" id="productCard">
                     <div className="container d-flex justify-content-center align-items-center pt-3">
                         <div className="product-bg d-flex justify-content-center">
                             <img src={`http://localhost/hurb/${product.product_img}`} alt={product.product_name} className="card-img-top" id="shopProduct-image"/>
                         </div>
                     </div>
                        <div className="card-body">
                            <h5 className="card-title">{product.product_name}</h5>
                            <h5 className="card-text">{product.product_price}</h5>
                        </div>
                     </div>
                    </Link>  
                ))}
           
            </div>
            <div className="row row-cols-1">
                <div className="col">
                    <span id="categoryTXT" className='d-flex mb-2'>T-Shirts</span>
                </div>
            </div>
           
            <div className="row mb-4">
                <div className="col d-flex align-items-center justify-content-center">
                    <hr className="border border-dark border-1 opacity-40" id="hr3"/>
                </div>
            </div>
        </div>
            
        </>
    )
}