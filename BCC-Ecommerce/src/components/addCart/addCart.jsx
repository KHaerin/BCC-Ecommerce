import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CartIcon from '../icons/add-to-cart/add-to-cart.png';
import CartIcon1 from '../icons/add-to-cart/1.png';
import CartIcon2 from '../icons/add-to-cart/2.png';
import CartIcon3 from '../icons/add-to-cart/3.png';
import CartIcon4 from '../icons/add-to-cart/4.png';
import CartIcon5 from '../icons/add-to-cart/5.png';
import CartIcon6 from '../icons/add-to-cart/6.png';
import CartIcon7 from '../icons/add-to-cart/7.png';
import CartIcon8 from '../icons/add-to-cart/8.png';
import CartIcon9 from '../icons/add-to-cart/9.png';
import CartIcon10 from '../icons/add-to-cart/10.png';
import CartIcon11 from '../icons/add-to-cart/11.png';
import CartIcon12 from '../icons/add-to-cart/12.png';
import CartIcon13 from '../icons/add-to-cart/13.png';
import CartIcon14 from '../icons/add-to-cart/14.png';
import CartIcon15 from '../icons/add-to-cart/15.png';
import CartIcon16 from '../icons/add-to-cart/16.png';
import CartIcon17 from '../icons/add-to-cart/17.png';
import CartIcon18 from '../icons/add-to-cart/18.png';
import CartIcon19 from '../icons/add-to-cart/19.png';
import CartIcon20 from '../icons/add-to-cart/20.png';
import CartIcon21 from '../icons/add-to-cart/21.png';
import CartIcon22 from '../icons/add-to-cart/22.png';
import CartIcon23 from '../icons/add-to-cart/23.png';
import CartIcon24 from '../icons/add-to-cart/24.png';
import CartIcon25 from '../icons/add-to-cart/25.png';

export default function AddCart() {

    const[tracks, setTrack] = useState([]);
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

    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/shop/cart');
    };

    return (
        <button className="nav-link" onClick={handleCartClick}>
            <img src={CartIcon} alt="Cart" id="cartIcon" />
        </button>
    );
}