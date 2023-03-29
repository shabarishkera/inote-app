import {React, useRef}from 'react'
import { useNavigate } from "react-router-dom"

export default function Login (){
 const host="http://localhost:5000"
const email=useRef(null);
const password=useRef(null);
const navigate=useNavigate();

    const handlesubmit=async (event)=>{
      event.preventDefault();
     const bodyobj={"email":email.current.value,
     "password":password.current.value}
    
      const response = await fetch(`${host}/auth/login`, {
        method: "POST",
        headers:{
        'Content-Type':"application/json",
        },
        body:JSON.stringify(bodyobj)
      })
      const json = await response.json();

      if(json.success)
      {
          //rediect all the trafic
          //save the auth tocken
          localStorage.setItem("auth-tocken",json.jwtocken)
          localStorage.setItem("inote-user",json.name)
        console.log(json.name)
        navigate("/")
      }
     
    }
    return (
      <div className='login-wrapper'>
        <form className='form-wrapper my-5 container'>
  <div className="mb-3 ">
    
    <input type="email" className="form-control" ref={email} placeholder='email' id="exampleInputEmail1" aria-describedby="emailHelp"  />
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    
    <input type="password"  placeholder='password' ref={password} className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button  className="btn btn-primary" onClick={handlesubmit}>Login</button>
</form>
      </div>
    )
  }

