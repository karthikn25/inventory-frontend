import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  const handleLogin = async ()=>{
       const userInfo = {
        email,
        password,
       }
       const res = await fetch('https://inventory-mh4w.onrender.com/users/login',{
        method:'POST',
        body:JSON.stringify(userInfo),
        headers:{
          "Content-Type":"application/json"
        }
       });
       const data = await res.json();
      localStorage.setItem("token",data.data.token)
      navigate("/home")
     
  }
 
  
  return (
    <Container>
    <Row>
    <Col>
    <section className='login'>
    
    <form>
    <div className='login-item'>
    <i className='bx bxs-lock' style={{marginLeft:'250px',fontSize:'30px'}}></i>
    <h4 style={{marginLeft:'235px'}}>LogIn</h4>
   <div className="mb-3" style={{width:'500px'}}>
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
  />
  </div>
  <div className="mb-3" style={{width:'500px'}}>
  <label for="exampleFormControlInput1" className="form-label">Password</label>
  <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter password"
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
  />
  </div>
  <div className='control'>
  <button type="button" class="btn btn-primary" onClick={handleLogin}>Login</button>
  </div>
  
 <div className='login-links'>
 <Link to="/forget-password">ForgetPassword</Link>
 <Link to="/">Don't have an Account?SignUp</Link>
 </div>
    
    </div>
    </form>
    
    </section>
    </Col>
    </Row>
    </Container>
  )
}
