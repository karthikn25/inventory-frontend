import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



export default function Home({inventory,setInventory}) {
  const history=useHistory("");
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
    <Row>
    <br/>
    
    <Col style={{marginTop:'50px'}}>
    {inventory.map((inven,idx)=>(
    <Card sx={{ maxWidth: 200 }}>
  
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {inven.name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
     {inven.type}
    </Typography>
    <Typography variant="body2" color="text.secondary">
 {inven.department}
   </Typography>
   <Typography variant="body2" color="text.secondary">
    {inven.amount}
   </Typography>
   <Typography variant="body2" color="text.secondary">
    {inven.date}
   </Typography>
  </CardContent>
  <CardActions>
      <Button size="small" onClick={()=>history.push(`/edit/${inven.id}`)}>Edit<i class='bx bxs-edit'></i></Button>
      <Button size="small" onClick={deleteInventory}>Delete<i class='bx bxs-trash-alt'></i></Button>
  </CardActions>
  </Card>
  ))}
    </Col>
    </Row>
  </Container>
    
  )
}
