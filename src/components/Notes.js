import Noteitem from './Noteiitem';
import React, { useContext, useEffect, useRef } from 'react'
import NoteContext from '../context/notes/noteconstext';
import AddNote from './AddNote';
export default function Notes() {
const {notes,getNotes}=useContext(NoteContext);
useEffect(()=>{
  getNotes();

},[]);
const newref=useRef(null);
const updateNote=()=>{
  console.log("button cliced");
  console.log(newref.current)
newref.current.click();
}
  return (
<>
<button type="button" className="btn btn-primary modal-btn" data-bs-toggle="modal" ref={newref} data-bs-target="#exampleModal">
  
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">EDIT NOTE</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="form-group">
    <label htmlFor="exampleInputEmail1 title"></label>
    <input type="text" className="form-control  title my-3" id="text-title" name="title" aria-describedby="emailHelp" placeholder="title"   />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1"></label>
    <textarea type="text"className="form-control desc my-2" id="text-desc" name='description' aria-describedby="emailHelp" placeholder="Decsription"   ></textarea>
  </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>



  <div className='row my-3'>
      
      <AddNote> </AddNote>
      <h2 className='my-3'>Your notes</h2>
{notes.map((item,index)=>{
  return <Noteitem item={item}  key={index} updateNote={updateNote}/>
})
}
    </div>
    </>
  )
}
