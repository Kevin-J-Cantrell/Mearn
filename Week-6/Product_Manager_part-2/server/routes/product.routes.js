const ProductController = require('../controllers/product.controller'); // rename to ProductController

module.exports = app => {
    app.get('/api/Products', ProductController.findAllProducts);
    app.post('/api/Product', ProductController.createNewProduct);
    app.get('/api/Product/:id', ProductController.findOneProduct);
    app.put('/api/Product/:id', ProductController.updateExistingProduct);
    app.delete('/api/Product/:id', ProductController.deleteAnExistingProduct);
}