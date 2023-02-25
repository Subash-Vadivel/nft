import React from 'react'
import '../Resources/CSS/cart.css';
import { useState } from 'react';
export const Cart = () => {
    const [data,setData]=useState({people:[]})
    const [cnt,setCnt]=useState(0);
    const index=0;
    const form=()=>
    {
        const date=new Date();
        data.people.push({id:cnt+1,time:date.toLocaleTimeString(),v:""})
        setCnt(cnt+1);
        setData(data);
        console.log(data);
    }
    const front=()=>
    {
        const date=new Date();
        data.people.splice(0,0,{id:cnt+1,time:date.toLocaleTimeString()})
        setCnt(cnt+1);
        setData(data);
        console.log(data);
    }
    var rows=data.people.map((val,index)=><tr key={val.id}><td>{index}</td><td>{val.id}</td><td><input type="text" ></input></td><td>{val.time}</td></tr>);
   // console.log(data.people[0].id);
    return (
    <>
    {/* {rows} */}
     <ul className='operations'>
      <li>
      <button onClick={form}> New Data </button>
      </li>
      <li>
      <button onClick={front}> Insert Front </button>
      </li>
      <li>
      <button onClick={()=>{ data.people.sort((p1, p2) => p2.id - p1.id);setData({...data})}}> Latest</button>
      </li>
      <li>
      <button onClick={()=>{ data.people.sort((p1, p2) => p1.id - p2.id); setData({...data})}}> Earlier</button>
      </li>
      </ul>
      <table>
        <tr>
            <th>Index</th>
            <th>ID</th>
            <th>Name</th>
            <th>Created At</th>

        </tr>
        {rows}
      </table>
    </>
  )
}
{/* <tr> <td> {val.id}</td><td>{val.no}</td><td><input type="text"></input></td><td></td>{val.time}</tr>} */}