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
  
}
const handlechange=(event)=>{
  setNote({...note,[event.target.name]:event.target.value});
}

  return (
    <div>
      <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1 title"></label>
    <input type="text" className="form-control" id="text-title" name="title" aria-describedby="emailHelp" placeholder="title"  onChange={handlechange} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1"></label>
    <textarea type="text"className="form-control desc my-2" id="text-desc" name='description' aria-describedby="emailHelp" placeholder="Decsription"   onChange={handlechange}></textarea>
  </div>
  <div className='submit-btn'>
  <button type="submit" className="btn btn-primary my-4" onClick={handleclick}>Submit</button>
  </div>
</form>
    </div>
  )
}
