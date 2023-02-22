import { useEffect, useState } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
function App() {
  const [user,setUser]=useState();
  useEffect(()=>{
    setUser(localStorage.getItem('id'));
    console.log(localStorage.getItem('id'));
  },[])
  return (
    <>
    <BrowserRouter>
        <Routes>
      <Route path='/' element={(user)?(<><Header setUser={setUser}/><Home/></>):(<Login setUser={setUser}/>)}/>
    </Routes>
    
    </BrowserRouter>
    </>
  
  );
}

export default App;
