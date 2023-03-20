const express=require("express")
const Notes=require('../models/Notes');
const router=express.Router();
const { body, validationResult } = require('express-validator');
//get all nodes 
var fetchdata=require("./fetchuserdata");
const fetchuserdata = require("./fetchuserdata");

router.get("/fetchnotes",fetchdata,async (req,res)=>{
    try {
        

const notes= await Notes.find({user:req.user.id});
res.json(notes)
    }
 catch (error)
 {
    console.error(error.message);
    res.status(500).send("some error occured");
 }
})
router.post("/addnote",fetchuserdata,[
    body('title','enter a title').isLength({ min: 2 }),
    body('description','enter description ').isLength({ min: 5 }),

],async (req,res)=>{
 try {
    
 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //create a new note
    const {title,description}=req.body;
    


    const  note=new Notes({
        title,description,
        user:req.user.id
    })
    const savednote=await note.save();
    res.send(savednote);
} catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
}

})
module.exports=router;