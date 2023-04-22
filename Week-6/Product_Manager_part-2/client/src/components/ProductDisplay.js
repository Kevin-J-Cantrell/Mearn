import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
const ProductDisplay = (props) => {
    const { product, setProduct } = props;
    
    useEffect((e) => {
        axios.get('http://localhost:8000/api/Products')
            .then((res) => {
                console.log(res.data.products);
                console.log(Array.isArray(res.data.products));
                setProduct(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            {
                product.map((product) => (
                    <div key={product._id}><Link to={`product/${product._id}`}>
                        <h3><span style={{color:"white"}}>Title:</span>  {product.title}</h3>
                        <h3><span style={{color:"white"}}>Price:</span> {product.price}</h3>
                        <h3><span style={{color:"white"}}>Description:</span> {product.description}</h3></Link>
                    </div>
                ))
            }
        </div>
    );
};
export default ProductDisplay;