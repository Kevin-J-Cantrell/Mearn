import React, { useState } from 'react';
import EditOneProduct from '../components/EditOneProduct';
const EditPage = () => {
    
    const [product, setProduct] = useState({});
    return (
        <div>
            <EditOneProduct product={product} setProduct={setProduct} />
        </div>
    );
}
export default EditPage;