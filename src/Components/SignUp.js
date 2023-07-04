import React, { useState } from 'react';
import { Link,useHistory } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap'

export default function SignUp() {
  const [userName,setUSerName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const history = useHistory("");
  const handleSignUp = async ()=>{
    const userInfo = {
      userName,
      email,
      password,
     }
     const res = await fetch('http://localhost:9090/api/auth/signup',{
        method:'POST',
        body:JSON.stringify(userInfo),
        headers:{
          "Content-Type":"application/json"
        }
       });
       const data = await res.json();
       localStorage.setItem("username",data.userName)
       localStorage.setItem("email",data.email)
       localStorage.setItem("password",data.hashedPassword)
       history.push("/login")
       console.log(data);
       console.log(userInfo);
  }
  
  return (
    <Container>
    <Row>
    <Col>
    <section className='signup'>
    
    <form>
    <div className='signup-item'>
    <i className='bx bxs-lock' style={{marginLeft:'250px',fontSize:'30px'}}></i>
    <h4 style={{marginLeft:'225px'}}>SignUp</h4>
  <div className="mb-3" style={{width:'500px'}}>
  <label for="exampleFormControlInput1" className="form-label" >User Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter userName"
  value={userName}
  onChange={(e)=>setUSerName(e.target.value)}
  />
  </div>
  <div className="mb-3" style={{width:'500px'}}>
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="userName@example.com"
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
  <button type="button" class="btn btn-success" onClick={handleSignUp}>SignUp</button>
  </div>
 <div className='signup-links'>
 <Link to="/login">Already have an Account?LogIn</Link>
 </div>
    
    </div>
    </form>

    </section>
    </Col>
    </Row>
    </Container>
  
  )
}
