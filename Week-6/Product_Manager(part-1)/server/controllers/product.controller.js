const Product = require('../models/product.model');//  models for Products

const findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({ products: allProducts })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => {
            res.json({ product: oneProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ product: newlyCreatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ product: updatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports = {
    findAllProducts,
    findOneProduct,
    createNewProduct,
    updateExistingProduct,
    deleteAnExistingProduct
};
