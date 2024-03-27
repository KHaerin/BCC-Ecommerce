import {Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import './productLook.css';

export default function productLook(){

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
            <h1>Product View</h1>
      
        </>
    )
}