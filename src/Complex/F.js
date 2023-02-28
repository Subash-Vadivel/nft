import React,{useContext} from 'react'
import { setC } from './New';
export default function F() {
  
  const dispatch=useContext(setC);
  return (

    <div><button onClick={()=>{dispatch({type:"inc"})}}> inc  </button> <button onClick={()=>{dispatch({type:"dec"})}}> Dec</button> <button onClick={()=>{dispatch({type:"reset"})}}> reset</button></div>
      )
}
