import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Black from '../../color-images/black.jpg';
import Red from '../../color-images/red.jpg';
import Grey from '../../color-images/grey.jpeg';
import Navy from '../../color-images/navy blue.jpg';
import White from '../../color-images/white.jpg';
import Star from '../../icons/star.png/';
import EStar from '../../icons/emptystar.png';

import './productLook.css';

export default function ProductLook() {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        fetchProduct(productId);
    }, [productId]);

    const fetchProduct = async (productId) => {
        try {
            const response = await axios.get(`http://localhost/hurb/products.php?product_id=${productId}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };
    
    return (
        <div className="container" id="product-look">
            <div className="row">
                <div className="col">
                {product.map((product, index) => (
                    <div className="container" key={product.product_id}>
                        <div className="row row-cols-2">
                            <div className="col" >
                                <div className="container d-flex flex-column justify-content-center align-items-center" id="product-color-container">
                                    <div className="col mb-4">
                                        <div className="product-image-container d-flex justify-content-center align-items-center">
                                            <img src={`http://localhost/hurb/${product.product_img}`} alt="" id="product_image"/>
                                        </div>
                                    </div>
                                    <div className="col" id="color-container">
                                            <div className="container d-flex flex-column justify-content-center">
                                            <div className="col mb-3 justify-content-center">
                                                <span>Color: Black </span>
                                            </div>
                                            <div className="col d-flex gap-3">
                                                <input type="radio" className="btn-check" name="options-base" id="option1" autoComplete="off" defaultChecked/>
                                                <label htmlFor="option1" className="btn color-radio"><img src={Black} alt="" id="color-radio-img"/></label>

                                                <input type="radio" className="btn-check" name="options-base" id="option2" autoComplete="off"/>
                                                <label htmlFor="option2" className="btn color-radio"><img src={White} alt="" id="color-radio-img" /></label>

                                                <input type="radio" className="btn-check" name="options-base" id="option3" autoComplete="off"/>
                                                <label htmlFor="option3" className="btn color-radio"><img src={Red} alt="" id="color-radio-img" /></label>

                                                <input type="radio" className="btn-check" name="options-base" id="option4" autoComplete="off"/>
                                                <label htmlFor="option4" className="btn color-radio"><img src={Navy} alt="" id="color-radio-img" /></label>

                                                <input type="radio" className="btn-check " name="options-base" id="option5" autoComplete="off"/>
                                                <label htmlFor="option5" className="btn color-radio"><img src={Grey} alt="" id="color-radio-img" /></label>
                                            </div>
                                            </div>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="container">
                                    <div className="row row-cols-1 mb-5">
                                        <div className="col d-flex mb-2">
                                         <span>{product.product_name}</span>
                                        </div>
                                        <div className="col d-flex gap-1">
                                            <img src={EStar} alt=""  id="star"  />
                                            <img src={EStar} alt=""  id="star"  />
                                            <img src={EStar} alt=""  id="star"  />
                                            <img src={EStar} alt=""  id="star"  />
                                            <img src={EStar} alt=""  id="star"  />
                                        </div>
                                    </div>
                                    <div className="row row-cols-1">
                                        <div className="col">
                                            <span>Size</span>
                                        </div>
                                        <div className="col">
                                            <input type="radio" className="btn-check" name="options-base" id="option5" autocomplete="off" checked/>
                                            <label className="btn" for="option5">X Small</label>

                                            <input type="radio" className="btn-check" name="options-base" id="option5" autocomplete="off" checked/>
                                            <label className="btn" for="option5">X Small</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
