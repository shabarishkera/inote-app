
const connectToMongo=require("./db")
const express = require('express')
connectToMongo();
const mongoose  = require('mongoose');

const { Schema } = mongoose;
const app = express()
const port = 3000
const User=require("./models/User")
 const Notes=require("./models/Notes")
app.use(express.json())
app.get('/', (req, res) => {
  res.send('home')
})

// app.use('/auth' ,require('./routes/auth.js'))
// app.use('/notes',require('./routes/notes.js'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 //messy code ...
 app.post('/api/auth', (req, res) => {
 console.log(req.body)
  const user=User(req.body);
  user.save();
  res.send("saved sucessfully ");

  })
  app.get('/api/notes', (req, res) => {
    console.log(req.body);
    res.send("dfdf");
  })