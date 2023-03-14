const monggose=require("mongoose")
const Schema=monggose.Schema;
const userschema = new Schema({
    name:{type:String,
    required:true},
    password:{
        type:String,
    required:true},
    date:{type:Date,
    default:Date.now
    },
    email:{
type:String,
required:true,
unique:true


    }
  });
const User=monggose.model('user',userschema);

  module.exports=User;