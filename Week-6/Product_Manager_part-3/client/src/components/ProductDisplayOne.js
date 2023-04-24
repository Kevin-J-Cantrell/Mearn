import React, { useState, useEffect } from 'react';
import { Link, useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';
const ProductDisplayOne = () => {
    const [ product, setProduct ] = useState({});// set product from state object and store it in state object
    const {id} = useParams();//use params from state object and store it in state object 
    const navigate = useNavigate()
    useEffect(() => {
            axios.get(`http://localhost:8000/api/getOne/${id}`)
                .then((res) => {
                    console.log(res.data);
                    setProduct(res.data.product);
                })
                .catch((err) => {
                    console.log(err);
                });
            },[]);
            console.log(product) 
            
            const deleteHandler = (id) => {
                console.log(id)
                axios.delete(`http://localhost:8000/api/delete/${id}`)
                .then((res) => {
                    console.log(res)
                    console.log("successfully deleted")
                    navigate("/")
                    const updatedProduct = product.filter((product) => product._id !== id)
            setProduct(updatedProduct)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <h2 style={{color:"cyan"}}>This is your product Item.</h2>
            {product && (
                <div key={id}>
                    <h4><span style={{color:"red"}}>Title:</span> <span style={{color:"green"}}>{product.title}</span></h4>
                    <h4><span style={{color:"white"}}>Price:</span> <span style={{color:"green"}}>{product.price}</span></h4>
                    <h4><span style={{color:"blue"}}>Description:</span> <span style={{color:"green"}}>{product.description}</span></h4>
                </div>
            )}
            <div className='d-flex justify-content-around'>     
            <Link to={"/"} className='btn btn-primary'>Home</Link>
            <button className='btn btn-danger' onClick={() => deleteHandler(product._id)}>Delete</button>
            </div>
        </div>
    );
};
export default ProductDisplayOne;