const mongoose =require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
const usersSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pincode: {
        type: Number,
        required: true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    date: {
        type: Date,
        default: Date.now
      }, 
     location: {
        type: Number,
        required: true
      },
     role: {
        enum: ['user', 'admin'],
        required: true,
      }
})

module.exports= mongoose.model('Users',usersSchema);