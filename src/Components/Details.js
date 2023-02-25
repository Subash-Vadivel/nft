import React from 'react'
import '../Resources/CSS/details.css';
import { useState } from 'react';
export default function Details() {
    const [data,setData]=useState({details:[]});
    const [name,setName]=useState();
    const [age,setAge]=useState();
    const [rollno,setRollno]=useState();
    const [searchv,Setsearchv]=useState();
    const [result,setResult]=useState();
    const sub=(e)=>
    {
        data.details.push({n:name,ag:age,roll:rollno})
        setData({...data});
        console.log(data);
        e.preventDefault();
    }
    const clear=(e)=>{
        setAge('');
        setName('');
        setRollno('');
        e.preventDefault();
    }
    const sear=(e)=>{
        console.log(searchv);
        try{
         var out=data.details.find((val)=>val.roll===searchv);
         
        setResult(<table>
            <tr><th>Name</th><th>Age</th><th>Roll No</th></tr>
            <tr><td>{out.n}</td><td>{out.ag}</td><td>{out.roll}</td></tr>
         </table>)
        }
        catch(err)
        {
            setResult();
        }
    }
    var rows=data.details.map((val,ind)=><tr><td>{val.n}</td><td>{val.ag}</td><td>{val.roll}</td></tr>);
  return (
  <>
     <form>
        <label style={{marginRight:"10px"}}>Name</label>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input><br></br><br></br>
        <label style={{marginRight:"10px"}}>Age</label>
        <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}}></input><br></br><br></br>
        <label style={{marginRight:"10px"}}>Roll No</label>
        <input type="number" value={rollno} onChange={(e)=>{setRollno(e.target.value)}}></input><br></br><br></br>
          <button onClick={sub}>Submit</button><button onClick={clear}>Clear</button>
    </form>
     <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Rollno</th>
        </tr>
        {rows}
     </table>
     <label style={{marginRight:"10px"}}>Enter Roll No</label>
     <input type="text" value={searchv} onChange={(e)=>Setsearchv(e.target.value)}></input><button onClick={sear}>Search</button>
     {result}

  </>
)

}
