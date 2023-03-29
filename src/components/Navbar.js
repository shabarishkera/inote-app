import React from 'react'
import {Link, useLocation,useNavigate} from "react-router-dom"
export default function Navbar() {
  var location=useLocation();
  const navigate=useNavigate();
  const logout=()=>
  {
localStorage.removeItem("auth-tocken");
    navigate("/login")
  }
  return (
  
   
<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/">i-Note</ Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/'?'active':""}`}aria-current="page" to="/">Home</Link >
        </li>
        {/* <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/about'?'active':""}`} to="/about">about</Link >
        </li> */}
       
        
      </ul>
       {!localStorage['auth-tocken']?
      <form className='d-flex'>
    <Link className="btn btn-primary " to="/login">login</Link >
    <Link className="btn btn-primary mx-3" to="/signup">Sign up</Link>
    
      </form> : <div className='fa-4x'>
      <label  >  {localStorage['inote-user']} </label>  
      <i className="bi bi-person-circle mx-3" > </i>
        <button className='btn btn-primary ' onClick={logout}>Logout</button>
    
      </div>
}
    </div>
  </div>
</nav>

  )
}
