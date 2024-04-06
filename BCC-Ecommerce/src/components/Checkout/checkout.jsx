import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function checkout(){

    useEffect(() => {
        fetchCartProducts();
    }, []);

    const fetchCartProducts = async () => {
        try{
            const user_id = localStorage.getItem('userId');
            const response = await axios.get(`http://localhost/hurb/track_select.php?user_id=${user_id}`);
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

            setTrack(processedData);
        }catch(error){
            console.log('Error fetching data:', error);
        }
    };

    return(
        <>
            <h1>Checkout</h1>
        </>
    )
}