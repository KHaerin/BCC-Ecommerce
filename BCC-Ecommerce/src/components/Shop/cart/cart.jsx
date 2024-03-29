import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './cart.css';

export default function cart(){

    const[tracks, setTrack] = useState([]);
    const[qtyField, setQtyField] = useState('');
    const[totalAmount, setTotalAmount] = useState('');
 
    useEffect(() => {
        fetchCartProducts();
    }, []);

    const fetchCartProducts = async () => {
        try{
            const response = await axios.get('http://localhost/hurb/track_select.php');
            const dataFetch = response.data;
            let totalAmount = 0;
            const processedData = [];

            for(let i = 0; i < dataFetch.length; i++){
                const currentItem = dataFetch[i];
                const itemTotalAmount = currentItem.product_qty * currentItem.product_price;
                totalAmount += itemTotalAmount;
    
                processedData.push({
                    ...currentItem,
                    totalAmount: itemTotalAmount
                });
            }

            setTotalAmount(totalAmount);
            setTrack(processedData);
        }catch(error){
            console.log('Error fetching data:', error);
        }
    };

    const removeFromCart = async (track_id) => {
        const url ="http://localhost/hurb/remove_product.php" ;

        let fData = new FormData();
        fData.append('track_id', track_id);

        axios.post(url, fData)
        .then(response=>{
            fetchCartProducts();
            alert(response.data);
        })
        .catch(error=>alert(error));
    };
    return(
        <>
            <div className="container" id="cartPage">
                <div className="row row-cols-1 mb-5">
                    <div className="col d-flex justify-content-center">
                        <h1>My Cart</h1>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label htmlFor="flexCheckDefault" className="form-check-label">ALL ITEMS</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-end">
                        <div className="col-auto d-flex justify-content-end" id="labelsCart">
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Total</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <hr className="border border-dark border-1 opacity-40" id="hrCart" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        {tracks.map((track, index) => (
                                 <div className="container" key={track.track_id} id="cart-product-list">
                                 <div className="row">
                                     <div className="col m-3">
                                         <div className="form-check">
                                             <input className="form-check-input" type="checkbox" value="" id="cart-check"/>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="row">
                                     <div className="col">
                                        <div className="product-image-container">
                                            <img src={`http://localhost/hurb/${track.product_img}`} alt="" id="cart-product-image"/>
                                        </div>
                                     </div>   
                                     <div className="col-lg-4 d-flex flex-column" id="cartDetails">
                                            <span className="mb-3" id="track-prod-name">{track.product_name}</span>
                                            <span id="sizetext">
                                            Size: {track.product_size.toUpperCase()}
                                            </span>
                                            <button className="btn btn-danger" type="button" onClick={() => removeFromCart(track.track_id)}>Remove</button>
                                     </div>
                                     <div className="col">
                                        <div className="container-fluid">
                                            <div className="row justify-content-end">
                                            <div className="col-auto d-flex justify-content-end" id="labels-cart-display">
                                                <span>${track.product_price}.00</span>  
                                                <div className="input-group mb-3" id="qtybox">
                                                    <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center" type="button" id="minusBtn-cart">-</button>
                                                    <input type="text" className="form-control" value={track.product_qty} onChange={(e) => setQtyField(e.target.value)} aria-label="Example text with two button addons" id="qtyField-cart"/>
                                                    <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center" type="button" id="plusBtn-cart">+</button>
                                                </div>
                                            <span value={track.product_price * track.product_qty}  id="total-text">{track.product_price * track.product_qty}</span>
                                            </div>     
                                            </div>
                                        </div>
                                     </div>
                                 </div>
                             </div>
                        ))}
                        </div>
                    </div>
                    <div className="row d-flex justify-content-end align-items-end" >
                        <div className="col-auto d-flex flex-column justify-content-end " >
                                <div className="row">
                                    <div className="col mb-3">
                                        <span id="orderTXT">Order Summary</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <span id="orderTXT-total" className="d-flex justify-content-end">{totalAmount}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                         <button id="checkoutBtn" className="btn btn-dark">Checkout</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}