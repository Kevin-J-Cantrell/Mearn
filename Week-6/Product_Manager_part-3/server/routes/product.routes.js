const ProductController = require('../controllers/product.controller'); // rename to ProductController

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.post('/api/create', ProductController.createNewProduct);
    app.get('/api/getOne/:id', ProductController.findOneProduct);
    app.put('/api/update/:id', ProductController.updateExistingProduct);
    app.delete('/api/delete/:id', ProductController.deleteAnExistingProduct);
}