import React from 'react'
import '../Resources/CSS/calculator.css';
import { useState } from 'react';
export const Calculator = () => {
     const [data,setData]=useState('');
    return (
    <>
    <table className='center-form'>
        <tr>
            <td colSpan={4} className='special-output'>
                {data}
            </td>
        </tr>
         <tr>
            <td onClick={()=>{setData(data+"+")}}> + </td>
            <td onClick={()=>{setData(data+"-")}}> - </td>
            <td onClick={()=>{setData(data.substring(0,data.length-1))}}> ← </td>
            <td onClick={()=>{setData("")}}> C </td>
        </tr>
        <tr>
            <td onClick={()=>{setData(data+"1")}} > 1 </td>
            <td onClick={()=>{setData(data+"2")}}> 2 </td>      
            <td onClick={()=>{setData(data+"3")}}> 3 </td>
            <td onClick={()=>{setData(data+"*")}}> X </td>
        </tr>
        <tr>
            <td onClick={()=>{setData(data+"4")}}> 4 </td>         
            <td onClick={()=>{setData(data+"5")}}> 5 </td>        
            <td onClick={()=>{setData(data+"6")}}> 6 </td>
            <td onClick={()=>{setData(data+"/")}}> / </td>
        </tr>
        
        <tr>
            <td onClick={()=>{setData(data+"7")}}> 7 </td>           
            <td onClick={()=>{setData(data+"8")}}> 8 </td>
            <td onClick={()=>{setData(data+"9")}}> 9 </td>
            <td onClick={()=>{setData(eval(data))}}> = </td>
        </tr>
    </table>
    </>
  )
}
