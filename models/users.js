const mongoose =require('mongoose');
const Schema = mongoose.Schema;
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
        required: false,
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
        required: false
      },
      mobileOtp: {
        type: Number,
        required: false,
      }
})

module.exports= mongoose.model('Users',usersSchema);