import React, { useState } from 'react';
import ProductForm from '../components/Product';
import ProductDisplay from '../components/ProductDisplay';

const Main = () => {
    
    const [product, setProduct] = useState([]);
    return (
        <div>
            <ProductForm product={product} setProduct={setProduct} />
            <hr />
            <ProductDisplay product={product} setProduct={setProduct} />
            
        </div>
    );
}
export default Main;