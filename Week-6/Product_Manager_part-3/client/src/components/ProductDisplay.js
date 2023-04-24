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

    const deleteHandler = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res) => {
            console.log(res)
            console.log("successfully deleted")
            const updatedProduct = product.filter((product) => product._id !== id)
            setProduct(updatedProduct)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            {
                product.map((product) => (
                    <div key={product._id} className='d-flex justify-content-center'>
                        <h3><span style={{color:"white"}}>Title: </span> <span style={{color:"green"}}>{product.title}</span> </h3>
                        <Link to={`product/${product._id}`} className='btn bg-primary'>View</Link><br />
                        <Link to={`edit/${product._id}`} className='btn bg-secondary'>Edit</Link>
                        <button className='btn bg-danger' onClick={() => deleteHandler(product._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};
export default ProductDisplay;