import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Addinventory({inventory,setInventory}) {
  const [name,setName]=useState("");
  const [type,setType]=useState("");
  const [department,setDepartment]=useState("");
  const [amount,setAmount]=useState("");
  const [date,setDate]=useState("");
  const history=useHistory("");
  
  const createInventory = async () =>{
      const newInventory={
        name:name,
        type:type,
        department:department,
        amount:amount,
        date:date
      }
    
    
    
    const response=await fetch("",{
        method:"POST",
        body:JSON.stringify(newInventory),
        headers:{
          "Content-Type":"application/json"
        },
      })
    const data=await response.json()
   setInventory([...inventory,data])
   history.push("/home");
   }
  
  return (
    <Container>
    <Row>
    <Col>
    <section className='add-inventory'>
    <form>
    <div className='inventory-items'>
    <i class='bx bxs-file-plus' style={{marginLeft:'550px',fontSize:'40px',marginTop:'50px'}}></i>
    <h4 style={{marginLeft:'500px'}}>Add Inventory</h4>
    <div className="mb-3" style={{width:'500px',marginLeft:'350px',marginTop:'20px'}}>
   <label for="exampleFormControlInput1" className="form-label" >Name</label>
   <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Material Name"
   value={name}
   onChange={(e)=>setName(e.target.value)}
   />
   </div>
   <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
   value={type}
   onChange={(e)=>setType(e.target.value)}
   style={{width:'500px',marginLeft:'350px',marginTop:'10px',height:'40px'}}>
   <option selected>Inventory Type</option>
  <option value="1">Electronics</option>
  <option value="2">Stationeries</option>
  <option value="3">Clothing</option>
  <hr/>
  <option value="4">Others</option>
</select>
<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
value={department}
onChange={(e)=>setDepartment(e.target.value)}
style={{width:'500px',marginLeft:'350px',marginTop:'10px',height:'40px'}}>
<option selected>Department</option>
<option value="1">HR Department</option>
<option value="2">Testing Department</option>
<option value="3">Frontend Department</option>
<option value="4">BackEnd Department</option>
<option value="5">FullStack Department</option>
<hr/>
<option value="4">Others</option>
</select>
<div className="mb-3" style={{width:'500px',marginLeft:'350px'}}>
   <label for="exampleFormControlInput1" className="form-label" >Amount</label>
   <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Amount"
   value={amount}
   onChange={(e)=>setAmount(e.target.value)}
   />
   </div>
   <div className="mb-3" style={{width:'500px',marginLeft:'350px'}}>
   <label for="exampleFormControlInput1" className="form-label" >Date</label>
   <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Enter Date"
   value={date}
   onChange={(e)=>setDate(e.target.value)}
   />
   </div>
   <div className='control'>
   <button type="button" class="btn btn-info" style={{marginBottom:'20px'}} onClick={createInventory}>Upload<i class='bx bx-upload'></i></button>
   </div>
    </div>
    </form>
    </section>
    </Col>
    </Row>
    </Container>
  )
}
