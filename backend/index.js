const { body, validationResult } = require('express-validator');
const connectToMongo = require("./db")
const express = require('express')
connectToMongo();
const mongoose = require('mongoose');
const { Schema } = mongoose;
const app = express()
const port = 5000;
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
app.use(express.json())
app.get('/', (req, res) => {
  res.send('home')
})
const authroute=require("./routes/auth")
const noteroute=require("./routes/notes")
const loginroute=require("./routes/login")
 app.use('/auth' ,authroute);
 app.use('/notes',noteroute);
 app.use('/login',loginroute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
