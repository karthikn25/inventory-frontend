import { useState,useEffect } from 'react';
import { Routes } from 'react-router-dom/';
import './App.css';
import { Route } from 'react-router-dom/';
import SignUp from './Components/SignUp';
import ForgetPassword from './Components/ForgetPassword';
import Home from './Components/Home';
import LogIn from './Components/Login';
import Topbar from './Components/Topbar';
import Addinventory from './Components/Addinventory';
import UpdateInventory from './Components/UpdateInventory';
import Nopage from './Components/Nopage';
import { useNavigate } from 'react-router-dom';


function App() {
  const [inventory,setInventory]=useState([]);
  const [editInventory,setEditInventory]=useState({})

  const navigate = useNavigate("");
  useEffect(()=>{
    const getInventory= async ()=>{
    const response=await fetch("https://inventory-mh4w.onrender.com/inventory/all",{
      method:"GET",
      headers:{
        "x-auth-token":localStorage.getItem("token")
      }
    });
    const data=await response.json();
    if(data){
      setInventory(data.data)
    }
    }
    if(!localStorage.getItem("token")){
      navigate("/login")
    }else{
      getInventory();
    }
     },[])
  
  return (
    <div className="App">
    <Routes>
    <Route exact path="/" element ={<SignUp/>}/>
    
    <Route path="/login" element ={ <LogIn/>}/>
    
    <Route path="/forget-password" element ={<ForgetPassword/>}/>
    
    <Route path="/home" element ={<div><Topbar/> <Home
    inventory={inventory}
    setInventory={setInventory}
    setEditInventory={setEditInventory}
    /></div>
   
    }/>
      
    <Route path="/add" element ={<div><Topbar/>  <Addinventory
    inventory={inventory}
    setInventory={setInventory}
    /></div>
    
      }/>
      <Route path="/edit/:id" element ={<div><Topbar/> <UpdateInventory
      editInventory={editInventory}
      /></div>
     
        }/>
   
    <Route path="/*" element ={<Nopage/>}/>
    </Routes>
    </div>
  );
}

export default App;
