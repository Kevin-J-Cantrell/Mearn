const mongoose = require('mongoose');//  mongoose module exports 
 
const ProductSchema = new mongoose.Schema({// create a new UserSchema object
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
});

const product = mongoose.model('product', ProductSchema); 
 
module.exports = product; 
