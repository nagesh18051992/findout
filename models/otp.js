const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const otpSchema= new mongoose.Schema({
    otp:{
        type:String,
        required:true
    },
    userId: {
        type: String,
        required: true,
    },
    createdAt : {
        type: Date,
        required: true,
    },
    expires: {
        type: Date,
        required: false,
    }
})

module.exports= mongoose.model('Otp',otpSchema);