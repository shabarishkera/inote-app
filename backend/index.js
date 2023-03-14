const { body, validationResult } = require('express-validator');
const connectToMongo=require("./db")
const express = require('express')
connectToMongo();
const mongoose  = require('mongoose');

const { Schema } = mongoose;
const app = express()
const port = 5000
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
 app.post('/api/auth',[
  body('email').isEmail(),
  body('name').isLength({ min: 5 }),
  body('password').isLength({ min: 5 })
  
 ], async(req, res) => {
 console.log(req.body)
  // const user=User(req.body);
  // user.save();
  // res.send("saved sucessfully ");
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
     let user= await User.findOne({email:req.body.email})
     if (user){
      return res.status(400).json({error:"userr alerady exits"})
     }
     try
     {
    user= await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    })
    res.json({"ans":"sucecss"});
    // .then(user => res.json(user))
    // .catch(err=>{console.log(err);
    //   res.json({error:"enter unique email"})
    // })
  }
  catch (error)
  {
    console.error(error.message);
    res.status(500).send("some error occured");
  }

  })

  app.get('/api/notes', (req, res) => {
    console.log(req.body);
    res.send("dfdf");
  })