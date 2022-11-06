const { Router } = require('express');
const express = require('express');
const { userLogin } = require('../controller/Users');
const usersCtrl = require('../controller/Users');
const router = express.Router();

router.post('/addUser', usersCtrl.userAdding);
router.post('/loginWithOtp', usersCtrl.userLogin);
router.post('/verifyOtp', usersCtrl.verifyOtp);
module.exports = router;