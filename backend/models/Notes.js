const monggose=require("mongoose")
const Schema=monggose.Schema;
const noteschema= new Schema({
    user:{
      type:monggose.Types.ObjectId,
      ref:'user',
      required:true,
       
    },
    title:{type:String,
    required:true},
    description:{type:String,
        required:true},
        date:{type:Date,
            default:Date.now
            },


    
  });
  module.exports=monggose.model('notes',noteschema)