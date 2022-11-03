const mongoose =require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
const usersSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: Date,
        default: Date.now
      }
})

module.exports= mongoose.model('Users',productsSchema);