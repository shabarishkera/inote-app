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
router.put("/updatenote/:id",fetchdata,async (req,res)=>{
   
  
const {title,description}=req.body;
const newnote={};
if (title)
newnote.title=title;
if(description)
newnote.description=description;

//findign exact note to be updated and change it
try { 
let note= await Notes.findById(req.params.id);
if(!note)
return res.status(404).send("note not found");

if(note.user!=req.user.id)
return res.status(404).send("username mismathc");
 
note=await Notes.findByIdAndUpdate(req.params.id,{$set:newnote})
res.send(note);
} catch (error) {
        res.status(400).send("something went wrong in db aceess")
}

})
router.delete("/deletenote/:id",fetchdata,async (req,res)=>{
    

    try {  
let note= await Notes.findById(req.params.id);

if(!note)
return res.status(404).send("note not found");  
if(note.user!=req.user.id)
return res.status(404).send("username mismathc");
 
note=await Notes.findByIdAndDelete(req.params.id);
res.send({"note":"deletion succees",note:note});
    } catch (error) {
        res.status(400).send("error deleting note");
    }
})
module.exports=router;