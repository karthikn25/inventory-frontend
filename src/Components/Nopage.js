import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Col, Container, Row } from 'react-bootstrap'

export default function Nopage() {
  const history = useHistory("");
    return (
   <Container>
   <Row>
   <Col>
   <section className='nopage'>
   <i class='bx bx-error-circle' style={{marginLeft:'200px',fontSize:'40px',marginTop:'-20px'}}></i>
   <h4 style={{color:'red',marginLeft:'170px'}}>WARNING</h4>
   <p style={{fontSize:'20px',marginRight:'10px'}}>Something went wrong please go back the web side.If you go back the webside please click the below button...</p>
   <button type="button" class="btn btn-warning" style={{marginTop:'50px',marginLeft:'180px'}} onClick={()=>history.push("/home")}>BACK</button>
   </section>
   
   </Col>
   </Row>
   </Container>
  )
}
