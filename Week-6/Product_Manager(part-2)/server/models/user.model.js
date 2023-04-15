const mongoose = require('mongoose');//  mongoose module exports 
 
const UserSchema = new mongoose.Schema({// create a new UserSchema object
    name: {
        type: String
    },
    age: {
        type: Number
    }
});
 
const User = mongoose.model('User', UserSchema); 
 
module.exports = User; 
