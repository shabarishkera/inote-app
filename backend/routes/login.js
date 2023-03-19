const express=require("express")
const router=express.Router();
const { body, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;
const User = require("../models/User")
const Notes = require("../models/Notes")
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
router.post('/', [
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
        user: user.id,
      }
      const jwtocken = jwt.sign(data, "hashingtocken")
      res.json({ jwtocken });
  
    }
    catch (err) {
      console.error(error.message);
      res.status(500).send("some error occured");
  
    }
  });
  module.exports=router;