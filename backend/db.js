const mongoose=require("mongoose")

  const connect_to_db=()=>{

    mongoose.connect('mongodb://127.0.0.1:27017/inotebook');

}
module.exports=connect_to_db;