const { body, validationResult } = require('express-validator');
const connectToMongo = require("./db")
const express = require('express')
connectToMongo();
const mongoose = require('mongoose');
const { Schema } = mongoose;
const app = express()
const port = 5000;
const cors=require('cors');
const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"));
      console.log("cors error");

    }
  },
  credentials: true,
}
app.use(cors(corsOptions))
var jwt = require('jsonwebtoken');
app.use(express.json())
app.get('/', (req, res) => {
  res.send('home')
})
const authroute=require("./routes/auth")
const noteroute=require("./routes/notes")
 app.use('/auth' ,authroute);
 app.use('/notes',noteroute);


app.listen(port, () => {
  console.log(`App initionalzed ${port}`)
})
