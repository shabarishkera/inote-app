const express = require("express")
const router = express.Router();
const { body, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;
const User = require("../models/User")
const Notes = require("../models/Notes")
var jwt = require('jsonwebtoken');
var fetchdata=require("./fetchuserdata");
router.post('/', [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password').isLength({ min: 5 })

], async (req, res) => {
    console.log(req.body)
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.status(400).json({ error: "userr alerady exits" })
    }
    try {
        const salt = bcrypt.genSaltSync(10);
        var securepass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            password: securepass,
            email: req.body.email,
        })

        const data = {
            id: user.id,
        }
        const jwtocken = jwt.sign(data, "hashingtocken")
        res.json({ jwtocken });
        
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }

})
router.post('/login', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
  
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email:req.body.email })
      if (!user)
        return res.status(400).json({ errors: "user does not exits" });
      let passmatch = await bcrypt.compare(password, user.password);
      if (!passmatch)
        return res.status(400).json({ errors: "passwordk does not math" });
      const data = {
        id: user.id,
      }
      const jwtocken = jwt.sign(data, "hashingtocken")
      res.json({ jwtocken });
  
    }
    catch (err) {
      console.error(error.message);
      res.status(500).send("some error occured");
  
    }
  });
router.post("/userdata",fetchdata,async (req,res)=>{
var userid=req.user.id;
try {
 const user= await User.findById(userid).select("-password")
 res.send(user)
}
 catch (error) {
    return res.status(401).json({ error: "no one in that name" })
 }


})


module.exports = router;
