const monggose=require("mongoose")
const Schema=monggose.Schema;
const noteschema= new Schema({
    title:{type:String,
    required:true},
    description:{type:String,
        required:true},
        date:{type:Date,
            default:Date.now
            },


    
  });
  module.exports=monggose.model('notes',noteschema)