import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Signup() {
  const name = useRef();
  const password = useRef();
  const email = useRef();
  const host="http://localhost:5000"
  const navigate=useNavigate();
  const handlesubmit=async (event)=>
  {
    event.preventDefault();
    const bodyobj={ 
      "name":name.current.value,
      "email":email.current.value,
    "password":password.current.value}
     const response = await fetch(`${host}/auth`, {
       method: "POST",
       headers:{
       'Content-Type':"application/json",
       },
       body:JSON.stringify(bodyobj)
     })
     const json = await response.json();
     if(json.success)
     {
        
         localStorage.setItem("auth-tocken",json.jwtocken)
         localStorage.setItem('inote-user',json.name);
       navigate("/")
     }


  }
  return (
    <div>
      <div className='login-wrapper'>
        <form className='form-wrapper my-5 container'>
          <div className="mb-3 ">

            <input type="email" className="form-control" ref={name} placeholder='name' id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3 ">

            <input type="email" className="form-control" ref={email} placeholder='email' id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3">

            <input type="password" placeholder='password' ref={password} className="form-control" id="exampleInputPassword1" />
          </div>


          <button className="btn btn-primary" onClick={handlesubmit}>Signup</button>
        </form>
      </div>
    </div>
  )
}
