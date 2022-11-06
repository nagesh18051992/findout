const express = require('express')
var cors = require('cors')
var bodyParser  = require('body-parser');
const app = express()
const router = require('./routes/router');
const mongoose = require('mongoose');
const { Router } = require('express');
mongoose.connect('mongodb://127.0.0.1:27017/findOut',{ useNewUrlParser: true })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use("*",cors())
app.use('/api/v1', require('./routes/router'))

app.use(bodyParser.json());
app.listen(3001, () => console.log('Server Started'))