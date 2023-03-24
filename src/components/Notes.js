import Noteitem from './Noteiitem';
import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteconstext';
import AddNote from './AddNote';
export default function Notes() {
const {notes}=useContext(NoteContext);
  return (
    <div className='row my3'>
      <h2>Your notes</h2>
      <AddNote> </AddNote>
{notes.map((item,index)=>{
  return <Noteitem item={item}  key={index}/>
})
}
    </div>
  )
}
