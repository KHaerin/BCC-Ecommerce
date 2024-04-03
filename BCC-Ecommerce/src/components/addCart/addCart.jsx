import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CartIcon from '../icons/add-to-cart/add-to-cart.png';


export default function AddCart() {

    const[tracks, setTrack] = useState([]);
    const[totalAmount, setTotalAmount] = useState('');

    const[isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedIn');
        if (storedLoginStatus === 'true') {
            setIsLoggedIn(true);
        }
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

    const navigate = useNavigate();

    const handleCartClick = () => {
        if(isLoggedIn){
            navigate('/shop/cart');
        }else if (!isLoggedIn){
            alert('Log in first');
            navigate('/login');
        }
    };

    return (
        <button className="nav-link" onClick={handleCartClick}>
            <img src={CartIcon} alt="Cart" id="cartIcon" />
        </button>
    );
}