import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const { product, setProduct } = props;// this is used to keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        const payLoad = { title, price, description }
        e.preventDefault();
        //prevent default behavior of the submit
        axios.post('http://localhost:8000/api/create', payLoad)

            //make a post request to create a new person
            .then(res => {
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data.product);// this is used to track your data when you create a new person
                setProduct([...product, res.data.product]); // this is used to set the product data for the product object
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title:</label><br />
                { }
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price:</label><br />
                <input type="number" onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description:</label><br />
                { }
                <input type="text" onChange={(e) => setDescription(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}
export default ProductForm;