import React, { useState } from 'react';
import ProductDisplayOne from '../components/ProductDisplayOne';

const OneProduct = () => {
    
    const [product, setProduct] = useState({});
    return (
        <div>
            <ProductDisplayOne product={product} setProduct={setProduct} />
        </div>
    );
}
export default OneProduct;