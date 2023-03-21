import React from 'react'
import {Link, useLocation} from "react-router-dom"
export default function Navbar() {
  var location=useLocation();
  return (
   
<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/">Shopping </ Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/'?'active':""}`}aria-current="page" to="/">Home</Link >
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/about'?'active':""}`} to="/about">about</Link >
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==='/login'?'active':""}`} to="/login">login</Link >
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>

  )
}