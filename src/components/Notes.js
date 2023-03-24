import Noteitem from './Noteiitem';
import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteconstext';
import AddNote from './AddNote';
export default function Notes() {
const {notes}=useContext(NoteContext);
  return (
    <div className='row my-3'>
      
      <AddNote> </AddNote>
      <h2 className='my-3'>Your notes</h2>
{notes.map((item,index)=>{
  return <Noteitem item={item}  key={index}/>
})
}
    </div>
  )
}
