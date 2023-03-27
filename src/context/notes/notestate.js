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
      headers: {
        'Content-Type': 'application/json',
        'auth-tocken':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjAxNTVkOWQ4MDk1OTJhNDU4NGYzNiIsImlhdCI6MTY3OTgyNDIyMn0.fdTmn_PcDzqaSExSDyXl3cfpNilxjgzGjIDF9xHKRyk"
      },
      body: JSON.stringify({title,description})
    })
    const json = await response.json();
    console.log(json);
    setNotes(notes.concat(json));
  }

  //delete note 
  const deleteNote =async (id) => {
    const newnote = notes.filter((item) => {
      return item._id != id
    })
    const response = await fetch(`${host}/notes/deletenote/${id}`, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json",
        'auth-tocken' :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjAxNTVkOWQ4MDk1OTJhNDU4NGYzNiIsImlhdCI6MTY3OTgyNDIyMn0.fdTmn_PcDzqaSExSDyXl3cfpNilxjgzGjIDF9xHKRyk",    
      },
    })
    const json = response.json();
    setNotes(notes);
    

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