import { useEffect, useState } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import A from './Complex/A';
import C from './Complex/C';
import B from './Complex/B';
import New from './Complex/New';

import Getandpost from './Components/Getandpost';
import { Header } from './Components/Header';
import Home from './Components/Home';
import LastTask from './Components/LastTask';
import Login from './Components/Login';
function App() {
  const [count,setCount]=useState(0);
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
<Route path='/db' element={<LastTask></LastTask>}></Route>
<Route path='/complex' element={<New/>}></Route>
</Routes>
</BrowserRouter>

    </>
  
  );
}
export default App;



