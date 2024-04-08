import Heart from '../../icons/heart.svg';
import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function display() {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetchProducts();
    }, []); 

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost/hurb/products.php');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
        <div className="container-fluid">
            <div className="row d-flex justify-content-between">
                {products.map((product, index) => (
                    <div className="col-auto mb-5" key={product.product_id}>
                        <div className="card" id="card-product">
                            <img src={`http://localhost/hurb/${product.product_img}`} alt="" id="product-shop-img" />
                                <div className="d-flex align-items-center justify-content-end mt-3">
                                    <img src={Heart} alt="" id="heartIcon" />
                                </div>
                                <hr className="border border-dark border-1 opacity-40" />
                                <div className="card-details d-flex flex-column">
                                    <h3 id="product-name">{product.product_name}</h3>
                                    <p className='d-flex gap-2' id="product-details">
                                        <span>{product.product_sex}</span>
                                        <span>{product.product_category}</span>
                                        <span>{product.product_sub_category}</span>
                                    </p>
                                    <p id="product-color">color diri</p>
                                    <p id="product-price">{product.product_price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
        
        
    );
}


