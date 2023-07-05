import React from 'react'
import { useNavigate } from 'react-router-dom/'
import {Link} from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';

export default function Topbar() {
  const navigate = useNavigate("");
  
  return (
    
  <nav className="navbar navbar-expand-lg bg-body-tertiary topbar" >
  <div className="container">
  
    <a className="navbar-brand" href="/home">Inventory</a>
    <Container>
    <Row>
    <Col>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:'550px'}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item" style={{marginLeft:'20px'}}>
          <Link to="/add" className="nav-link">AddInventory</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search" style={{marginLeft:'250px'}}>
        <button className="btn btn-outline-danger" onClick={()=>navigate("/login")}>LogOut</button>
      </form>
    </div>
    </Col>
    </Row>
    </Container>
  </div>
</nav>
  )
}
