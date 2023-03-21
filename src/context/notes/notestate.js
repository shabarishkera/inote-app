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
      }
  ]
  const [notes,setNotes]=useState(nots)

    return (
<NoteContext.Provider value={{notes,setNotes}}>
{props.children} 
 </NoteContext.Provider>

 
    )



}

export default NoteState;