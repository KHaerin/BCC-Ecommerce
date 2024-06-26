import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './cart.css';

export default function Cart(){

    const [tracks, setTracks] = useState([]);
    const [qtyField, setQtyField] = useState('');
    const [totalAmount, setTotalAmount] = useState('');

    useEffect(() => {
        fetchCartProducts();
    }, []);

    const fetchCartProducts = async () => {
        try {
            const user_id = localStorage.getItem('userId');
            const response = await axios.get(`http://localhost/hurb/track_select.php?user_id=${user_id}`);
            const dataFetch = response.data;
            let total = 0;
            const processedData = await Promise.all(dataFetch.map(async (item) => {
                const productResponse = await axios.get(`http://localhost/hurb/products.php?product_id=${item.product_id}`);
                const productData = productResponse.data[0]; 
                const totalAmount = item.product_qty * productData.product_price;
                total += totalAmount;
                return { ...item, ...productData, totalAmount };
            }));
            setTotalAmount(total);
            setTracks(processedData);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    const updateQuantity = async (track_id, newQuantity) => {
        try {
            const formData = new FormData();
            formData.append('track_id', track_id);
            formData.append('product_qty', newQuantity);

            const response = await axios.post("http://localhost/hurb/update_quantity.php", formData);
            fetchCartProducts();
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const handleQuantityChange = (track_id, newQuantity) => {
        const existingTrack = tracks.find(track => track.track_id === track_id);
        const currentStock = existingTrack.product_stock;
    
        if (newQuantity > currentStock) {
            alert('Exceeded available stock');
        } else {
            updateQuantity(track_id, newQuantity);
        }
    };
    
    

    const increaseQuantity = (track_id, currentQuantity) => {
        const newQuantity = parseInt(currentQuantity) + 1;
        handleQuantityChange(track_id, newQuantity);
    };

    const decreaseQuantity = (track_id, currentQuantity) => {
        if (parseInt(currentQuantity) > 1) {
            const newQuantity = parseInt(currentQuantity) - 1;
            handleQuantityChange(track_id, newQuantity);
        }
    };

    const removeFromCart = async (track_id) => {
        try {
            const formData = new FormData();
            formData.append('track_id', track_id);

            const response = await axios.post("http://localhost/hurb/remove_product.php", formData);
            fetchCartProducts();
            window.location.reload();
            alert(response.data);
        } catch (error) {
            alert(error);
        }
    };

    const checkOut = () => {
        if(tracks.length === 0){
            alert('No products to checkout');
        }else{
            window.location.href = "/checkout";
        }
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
                            <p className="noText">{tracks.length === 0 ? 'No Items In Your Cart' : ''}</p>
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
                                                    <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center" type="button"  onClick={() => decreaseQuantity(track.track_id, track.product_qty)} id="minusBtn-cart">-</button>
                                                    <input type="text" className="form-control" value={track.product_qty} onChange={(e) => setQtyField(e.target.value)} aria-label="Example text with two button addons" id="qtyField-cart"/>
                                                    <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center" type="button" onClick={() => increaseQuantity(track.track_id, track.product_qty)} id="plusBtn-cart">+</button>
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
                                         <button id="checkoutBtn" className="btn btn-dark" onClick={checkOut}>Checkout</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}