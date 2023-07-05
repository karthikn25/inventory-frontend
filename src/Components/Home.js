import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom/';




export default function Home({inventory,setInventory}) {
  
  const navigate=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("token")){
    navigate("/login",{replace:true})
    }
  })
  
  const deleteInventory =async (delId)=>{
    console.log(delId)
     const response=await fetch(`https://inventory-mh4w.onrender.com/inventory/delete/${delId}` , {
      method:"DELETE"
      
     });
     const data=await response.json()
     if(data){
          const remainingInventory=inventory.filter((inven,idx)=>inven.id!== delId)
          setInventory(remainingInventory)
     }
      }
  return (
    
    <Container>
    
    <Row style={{gap:'50px',marginTop:'30px'}}>
       
    {inventory.map((inven,idx)=>(
    <Card sx={{ maxWidth: 200 }}>
    <CardContent style={{textAlign:'center'}}>
    <Typography gutterBottom variant="h5" component="div" >
      {inven.name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
     Type:{inven.type}
    </Typography>
    <Typography variant="body2" color="text.secondary">
 Department:{inven.department}
   </Typography>
   <Typography variant="body2" color="text.secondary">
    Price:{inven.amount}
   </Typography>
   <Typography variant="body2" color="text.secondary">
    Date:{inven.date}
   </Typography>
  </CardContent>
  <CardActions style={{marginLeft:'20px'}}>
      <Button size="small" onClick={()=>navigate(`/edit/${inven.id}`)}>Edit<i class='bx bxs-edit'></i></Button>
      <Button size="small" onClick={deleteInventory}>Delete<i class='bx bxs-trash-alt'></i></Button>
  </CardActions>
  </Card>
  ))}
    
    </Row>
  </Container>
    
  )
}
