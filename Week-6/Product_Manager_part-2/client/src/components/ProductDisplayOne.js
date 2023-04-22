import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const ProductDisplayOne = () => {
    const [ product, setProduct ] = useState({});// set product from state object and store it in state object
    const {_id} = useParams();//use params from state object and store it in state object 
    useEffect(() => {
            axios.get(`http://localhost:8000/api/product/${_id}`)
                .then((res) => {
                    console.log(res.data);
                    setProduct(res.data.product);
                })
                .catch((err) => {
                    console.log(err);
                });
    },[]);
    console.log(product) 
    

    return (
        <div>
            <h1 style={{color:"cyan"}}>Welcome!!</h1>
            <h2 style={{color:"cyan"}}>This is your product Item.</h2>
            {product && (
                <div key={_id}>
                    <h4><span style={{color:"red"}}>Title:</span> <span style={{color:"green"}}>{product.title}</span></h4>
                    <h4><span style={{color:"white"}}>Price:</span> <span style={{color:"green"}}>{product.price}</span></h4>
                    <h4><span style={{color:"blue"}}>Description:</span> <span style={{color:"green"}}>{product.description}</span></h4>
                </div>
            )}
        </div>
    );
};
export default ProductDisplayOne;