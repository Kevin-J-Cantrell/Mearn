const ProductController = require('../controllers/product.controller'); // rename to ProductController
 
module.exports = app => {
    app.get('/api/Products', ProductController.findAllProducts);
    app.post('/api/Products', ProductController.createNewProduct);
    app.get('/api/Products/:id', ProductController.findOneProduct);
    app.put('/api/Products/:id', ProductController.updateExistingProduct);
    app.delete('/api/Products/:id', ProductController.deleteAnExistingProduct);
}