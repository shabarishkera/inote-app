import React, { useState } from "react";
import NoteContext from "./noteconstext";
const NoteState=(props)=>{
var nots=[
    {
      "_id": "64180badc8cb09ff96aa81f5",
      "user": "64180b2525e3c2369c433f2d",
      "title": "jack dies",
      "description": "fddfdfd a description ",
      "date": "2023-03-20T07:30:53.093Z",
      "__v": 0
    },
    {
        "_id": "64180badc8cb09ff96aa81f5",
        "user": "64180b2525e3c2369c433f2d",
        "title": "jack dies",
        "description": "fddfdfd a description ",
        "date": "2023-03-20T07:30:53.093Z",
        "__v": 0
      },
      {
          "_id": "64180badc8cb09ff96aa81f5",
          "user": "64180b2525e3c2369c433f2d",
          "title": "jack dies",
          "description": "fddfdfd a description ",
          "date": "2023-03-20T07:30:53.093Z",
          "__v": 0
        },
        {
            "_id": "64180badc8cb09ff96aa81f5",
            "user": "64180b2525e3c2369c433f2d",
            "title": "jack dies",
            "description": "fddfdfd a description ",
            "date": "2023-03-20T07:30:53.093Z",
            "__v": 0
          },
          {
              "_id": "64180badc8cb09ff96aa81f5",
              "user": "64180b2525e3c2369c433f2d",
              "title": "jack dies",
              "description": "fddfdfd a description ",
              "date": "2023-03-20T07:30:53.093Z",
              "__v": 0
            }
  ]
  const [notes,setNotes]=useState(nots)
//add a note
const addNote=(notee)=>
{ 
  const {title,description} =notee;
  console.log(title,description);
  //api to be used
  const note={
    "_id": "64180badc8cb09ff96aa81f5",
    "user": "64180b2525e3c2369c433f2d",
    "title":`${title}`,
    "description":`${description}`,
    "date": "2023-03-20T07:30:53.093Z",
    "__v": 0
  }
  
  setNotes(notes.concat(note));
}

//delete note 
const deleteNote=()=>
{

}


//edit note
const editNote=()=>{

}
    return (
<NoteContext.Provider value={{notes,setNotes,addNote,editNote,deleteNote}}>
{props.children} 
 </NoteContext.Provider>

 
    )



}

export default NoteState;