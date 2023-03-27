import React, { useState } from "react";
import NoteContext from "./noteconstext";
const host = "http://localhost:5000";
const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
  const getNotes = async() => {
   
    //api to be used
  console.log("fetching data")
    const response = await  fetch(`${host}/notes/fetchnotes`, {
      method: "GET",
      headers:new Headers({
        "Content-Type": "application/json",
        'auth-tocken' :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjAxNTVkOWQ4MDk1OTJhNDU4NGYzNiIsImlhdCI6MTY3OTgyNDIyMn0.fdTmn_PcDzqaSExSDyXl3cfpNilxjgzGjIDF9xHKRyk",
        cors:"no-cors"
      }),
    });
   const json= await response.json(); 
   setNotes(json) ;
  }
  //add a note
  const addNote = async(notee) => {
    const { title, description } = notee;
    console.log(title, description);
    //api to be used
    const response = await fetch(`${host}/notes/addnote/`, {
      method: "POST",
      mode: "same-origin",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title,description})
    })
    const json = response.json();
    const note = {
      "_id": "64180badc8cb09ff96aa81f5",
      "user": "64180b2525e3c2369c433f2d",
      "title": `${title}`,
      "description": `${description}`,
      "date": "2023-03-20T07:30:53.093Z",
      "__v": 0
    }

    setNotes(notes.concat(note));
  }

  //delete note 
  const deleteNote = (id) => {
    const newnote = notes.filter((item) => {
      return item._id != id;


    })
    setNotes(newnote);

  }


  //edit note
  const editNote = async (id, title, description) => {
    // api calls
    const response = await fetch(`${host}/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title,description})
    })
    const json = response.json();

    for (let i = 0; i < i.length; i++) {
      if (notes[i]._id == id) {
        const edited = notes[i];
        edited.title = title;
        edited.description = description;
      }


    }

  }
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote,getNotes}}>
      {props.children}
    </NoteContext.Provider>


  )



}

export default NoteState;