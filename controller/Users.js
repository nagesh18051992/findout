const express = require('express')
const app = express();
const jwt = require("jsonwebtoken");
const { updateOne } = require('../models/users');
const Users = require('../models/users');
const Otp = require('../models/otp');
const otpGenerator = require('otp-generator')
let usersCtrl = {
  userAdding: async function (req, res, next) {
    const user= new Users({
      name:req.body.name,
      email:req.body.email,
      mobile:req.body.mobile,
      pincode: req.body.pincode,
    });
   try {
    const newUser = await user.save();
    console.log(newUser);
    res.json(user)
    }
    catch(err) {
    res.status(404).json({message: 'errror>>>>>>>>>>>>>'});
     }
  },
  userLogin: async function (req, res, next) {
    const mobile = req.body.mobile;
    const verifyMobile = await Users.findOne({mobile: mobile});
    console.log('otp>>>>>>>>>>>>>>>>>>>>>>>>>11', verifyMobile);
    try {
      if (verifyMobile) {
        const intialOtp = otpGenerator.generate(4, { digits: true});
        const userId = verifyMobile._id;
        verifyMobile.mobileOtp = intialOtp;
        const otp= new Otp({
          otp:intialOtp,
          userId:verifyMobile._id,
          createdAt: new Date(),
        });
        const newOtp = await otp.save();
        const updatedUser = await Users.updateOne({user: verifyMobile});
        console.log('ssssssssssssssssss', updatedUser);
        console.log('otp>>>>>>>>>>>>>>>>>>>>>>>>>22', newOtp);
        return res.status(200).json({ user: userId, otp: newOtp, msg: 'opt sent to your mobile number'});
      }
      else {
        return res.status(400).send('Invalid mobile number>>>>>>>>>>>>>>>');
      }
    }
    catch(e) {
     return res.status(400).send('error ccccccccccccccccc');
    }
  },
  verifyOtp: async function(req, res, next) {
    console.log('coming here>>>>>>>>>>>>>>>>>>', req.body);
    const userId = req.body.userId;
    const actualOtp = req.body.otp;
    const verifycation = await Otp.findOne({otp: actualOtp });
    console.log('otp in modelsssssssssss', verifycation);
    try {
      if (verifycation) {
        console.log('verif', verifycation);
        const token = jwt.sign({ _id: verifycation._id }, 'lakshmaiaahahahahh');
        return res.status(200).json({ token: token, user: verifycation });
      }
      else {
        return res.status(400).send('invalid otp>>>>>>>>>>>>>');
      }
    }
    catch (e) {
      return res.status(400).send('Errorrrrrrrrrrrrrrrrrr');
    }
  
  }
}
  module.exports= usersCtrl;