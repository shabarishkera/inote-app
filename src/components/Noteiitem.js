import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteconstext';

export default function  (props) {
    const {item}=props;
    const {updateNote}=props;
    const updatenotewithin=()=>{

      updateNote(item);

    }
    const handledelete=()=>
    {
      deleteNote(item._id);

    }
    const context=useContext(NoteContext);
    const {deleteNote}=context;
  
  return (
    <div className='col-md-3 '>
     <div className="card my-3" >
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
    <div className='icon-con'>
    <i className="bi bi-trash-fill" onClick={handledelete}></i>
    <i className="bi bi-pencil-square"  onClick={updatenotewithin}></i>
    </div>
  </div>
</div>
    </div>
  )
}
