import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteconstext';
import Notes from "./Notes"
import AddNote from './AddNote';
export default function Home() {
  return (
    <div className='container '>
   
<Notes></Notes>

    </div>
  )
}
