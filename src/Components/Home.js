import React, { useState } from 'react'
import '../Resources/CSS/home.css';
import Conversion from './Conversion';
function Home(){
  const[count,setCount]=useState(0);
  const[result,setResult]=useState(0);
  const[country,setCountry]=useState('');
  
  return (
    <>
        <div className='special'>

        <h2 >{count}</h2>
        <button className='btn' onClick={()=>{count<15?setCount(count+1):setCount(count)}}>Inc</button>
        <button className='btn' onClick={()=>{count>=1?setCount(count-1):setCount(count);}}>Dec</button>
        </div>

        <div className='special'>
            <Conversion/>
        </div>

        <div className='special'>

        {(country==='USD'?<h1>{result/80}</h1>:country==='EUR'?<h1>{result/88}</h1>:country==='YEN'?<h1>{result/1.63}</h1>:<h1>Fill Values</h1>)
        }

        <button className='btn' onClick={()=>{setResult(window.prompt("Enter Amount"))}}>Amount</button>
        <button className='btn' onClick={()=>{setCountry(window.prompt("Enter Country"))}}>Convert</button>
        <button className='btn' onClick={()=>{setResult(0)}}>Clear</button>

        </div>
 
         

    </>
  )
}
export default Home;

