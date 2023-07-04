import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ForgetPassword() {
  return (
   <Container>
   <Row>
   <Col>
   <section className='forget'>
   <form>
   <div className='forget-item'>
   <i className='bx bxs-lock-open' style={{marginLeft:'250px',fontSize:'30px'}}></i>
   <h4 style={{marginLeft:'180px'}}>Forget Password</h4>
 <div className="mb-3" style={{width:'500px'}}>
 <label for="exampleFormControlInput1" className="form-label" >Email Address</label>
 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
 </div>
 <div className="mb-3" style={{width:'500px'}}>
 <label for="exampleFormControlInput1" className="form-label">New Password</label>
 <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter New Password "/>
 </div>
 <div className="mb-3" style={{width:'500px'}}>
 <label for="exampleFormControlInput1" className="form-label">Confirm Password</label>
 <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter password"/>
 </div>
 <div className='control'>
 <button type="button" class="btn btn-success">Reset</button>
 </div>
<div className='forget-links'>
<Link to="/login">LogIn</Link>
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
