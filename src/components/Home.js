import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteconstext';
import Notes from "./Notes"
export default function Home() {
  return (
    <div className='container'>
    <h1>ADD A NOTE</h1>
    <form>
  <div className="form-group">
    <label For="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label For="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" For="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<Notes></Notes>

    </div>
  )
}
