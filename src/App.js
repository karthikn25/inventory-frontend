import { useState,useEffect } from 'react';
import { Switch } from 'react-router-dom/';
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


function App() {
  const [inventory,setInventory]=useState([]);
  const [editInventory,setEditInventory]=useState({})
  useEffect(()=>{
    const getInventory= async ()=>{
    const response=await fetch("https://inventory-mh4w.onrender.com/inventory/all",{
      method:"GET",
    });
    const data=await response.json();
    if(data){
      setInventory(data)
    }
    }
    getInventory();
    },[])
  
  return (
    <div className="App">
    <Switch>
    <Route exact path="/">
    <SignUp/>
    </Route>
    <Route path="/login">
    <LogIn/>
    </Route>
    <Route path="/forget-password">
    <ForgetPassword/>
    </Route>
    <Route path="/home">
    <Topbar/>
    <Home
    inventory={inventory}
    setInventory={setInventory}
    setEditInventory={setEditInventory}
    />
    </Route>
    <Route path="/add">
    <Topbar/>
    <Addinventory
    inventory={inventory}
    setInventory={setInventory}
    />
    </Route>
    <Route path="/edit/:id">
    <Topbar/>
    <UpdateInventory
    editInventory={editInventory}
    />
    </Route>
    <Route path="/*">
    <Nopage/>
    </Route>
    </Switch>
    </div>
  );
}

export default App;
