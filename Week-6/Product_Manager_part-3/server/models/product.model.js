const mongoose = require('mongoose');//  mongoose module exports 
 
const ProductSchema = new mongoose.Schema({// create a new UserSchema object
    title: {
        type: String,
        minlength: 3,
        maxlength: 155
        
    },
    price: {
        type: Number
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 355
        
    }
});

const product = mongoose.model('product', ProductSchema); 
 
module.exports = product; 
