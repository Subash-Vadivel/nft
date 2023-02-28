import React, { useContext } from 'react'
import { setC } from './New';
export default function A() {
  const dis=useContext(setC);
  return (
    <div><button onClick={()=>{dis({type:"inc"})}}> inc  </button> <button onClick={()=>{dis({type:"dec"})}}> Dec</button> <button onClick={()=>{dis({type:"reset"})}}> reset</button></div>
  )
}
