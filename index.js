const express = require('express')
var cors = require('cors')
var bodyParser  = require('body-parser');
const app = express()
const nodemailer = require('nodemailer')
const mongoose = require('mongoose');
const postsRouter = require('./routes/usePosts')
const loginRouter= require('./routes/loginAuth')
mongoose.connect('mongodb://localhost:27017/Posts',{ useNewUrlParser: true })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use("*",cors())
app.use(bodyParser.json());
app.use('/posts', postsRouter)
app.use('/reg',loginRouter)
app.listen(3000, () => console.log('Server Started'))