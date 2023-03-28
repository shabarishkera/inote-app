import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteconstext'
import { useState } from 'react';

export default function 
()  {

const {addNote}=useContext(NoteContext);
const [note,setNote]=useState({title:"",description:""});
const handleclick=(e)=>{
  e.preventDefault();
  addNote(note);
  setNote({title:"",description:""})
  
}
const handlechange=(event)=>{
  setNote({...note,[event.target.name]:event.target.value});
}

  return (
    <div>
      <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1 title"></label>
    <input type="text" className="form-control  title my-3" id="text-title" name="title" aria-describedby="emailHelp" placeholder="title" value={note.title} onChange={handlechange} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1"></label>
    <textarea type="text"className="form-control desc my-2" id="text-desc" name='description' aria-describedby="emailHelp" placeholder="Description"  value={note.description}  onChange={handlechange}></textarea>
  </div>
  <div className='submit-btn'>
  <button type="submit" disabled={note.title.length<3||note.description.length<5} className="btn btn-danger my-4" onClick={handleclick}>Save</button>
  </div>
</form>
    </div>
  )
}
