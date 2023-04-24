import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate} from 'react-router-dom';
const EditOneProduct = (props) => {
    //keep track of what is being typed via useState hook
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    });// MAKE sure that the this is in the correct useState if it is object or array 
    const navigate = useNavigate();
    const { id } = useParams();

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        e.preventDefault();
        //prevent default behavior of the submit
        if (!id) {
            console.log("Id is required");
            return;
        }
        
        axios.put(`http://localhost:8000/api/update/${id}`, product)
        
        //make a post request to create a new person
        .then(res => {
            console.log(res.data); // always console log to get used to tracking your data!
            console.log(res.data.product);// this is used to track your data when you create a new person
            setProduct(res.data.product); // this is used to set the product data for the product object
            navigate(`/Product/${id}`);
        })
        .catch(err => console.log(err))
    }
    
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/getOne/${id}`)
        .then((res) => {
                console.log(res.data.product);
                setProduct(res.data.product);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(product)

    const changeHandler = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title:</label><br />
                { }
                <input type="text" name='title' onChange={changeHandler} value={product.title} />
            </p>
            <p>
                <label>Price:</label><br />
                { }
                <input type="number" name='price' onChange={changeHandler} value={product.price} />
            </p>
            <p>
                <label>Description:</label><br />
                { }
                <input type="text" name='description' onChange={changeHandler} value={product.description} />
            </p>
            <input type="submit" /> 
        </form>
    )
}
export default EditOneProduct;