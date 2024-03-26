import SellerMenu from "../../SellerMenu";
import React, { useState } from 'react';
import axios from 'axios';
import '../Products.css';

export default function addproduct(){

    const[product_name, setProductName] = useState('');
    const[product_details, setProductDetails] = useState('');
    const[product_price, setProductPrice] = useState('');
    const[product_stock, setProductStock] = useState('');
    const[product_img, setProductImg] = useState('');

    const handleSubmit = () => {
        if(product_name.length === 0){
            alert('Product name empty!');
        }else if(product_details.length === 0){
            alert('Product details empty!'); 
        }else if(product_price.length === 0){
            alert('Product price empty!');
        }else if(product_stock.length === 0){
            alert('Product stock empty!');
        }else if(!product_img){
            alert('Please provide an image for your product!');
        }else{
            const url ="http://localhost/hurb/add_product.php" ;

            let fData = new FormData();
            fData.append('product_name', product_name);
            fData.append('product_details', product_details);
            fData.append('product_price', product_price);
            fData.append('product_img', product_img);
            fData.append('product_stock', product_stock);

            axios.post(url, fData)
            .then(response=>{
                alert(response.data);


                setProductName('');
                setProductDetails('');
                setProductPrice('');
                setProductStock('');
                setProductImg('');

            })
            .catch(error=>alert(error));
        }
    }

    return(
        <>
        <div className="container-fluid" id="account-container">
            <div className="row gap-5">
               <SellerMenu></SellerMenu>
               <div className="col">
               <hr className="border border-dark border-1 opacity-40" id="hr1"/>
               <div className="container-fluid">
                   <div className="col">
                    <h1 className="d-flex justify-content-center">New Product</h1>
                   <div className="form" id="addForm">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control-sm" value={product_name} onChange={(e) => setProductName(e.target.value)} name="product_name" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Product Name</label>
                         </div>

                         <div className="form-floating mb-3">
                            <textarea className="form-control" name="product_details" value={product_details} onChange={(e) => setProductDetails(e.target.value)} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label htmlFor="floatingTextarea">Details</label>
                        </div>

                         <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control-sm" value={product_price} onChange={(e) => setProductPrice(e.target.value)} name="product_price" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Price</label>
                         </div>

                         <div className="form-floating mb-3">
                            <input type="number" className="form-control form-control-sm" value={product_stock} onChange={(e) => setProductStock(e.target.value)} name="product_stock" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Stock</label>
                         </div>
                            <input className="form-control mb-3" onChange={(e) => setProductImg(e.target.files[0])} name="product_img" type="file" id="formFile"></input>

                            <button className="btn btn-primary" type="button" name="send" onClick={handleSubmit}>Add Product</button>
                    </div>
                   </div>
               </div>
               </div>
            </div>
       </div>
        </>
    )
}