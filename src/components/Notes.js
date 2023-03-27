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
    <div>
<button type="button" className="btn btn-primary" ref={newref} data-toggle="modal" data-target="#exampleModal">
</button>

<div className="modal fade" id="exampleModal"  tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">EDIT NOTE</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
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
