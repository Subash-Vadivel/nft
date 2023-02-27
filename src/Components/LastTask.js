import React from 'react'
import '../Resources/CSS/lasttask.css';
import { useState } from 'react';                     
export default function LastTask() {
    const [data,setData]=useState({people:[]})
    const [cnt,setCnt]=useState(-1);
    const [insertf,setInsertf]=useState(false);
    const [insertl,setInsertl]=useState(false);
    const [up,setUp]=useState('');
    const [updval,setUpdval]=useState('');
    const [pending,setPending]=useState(false);
    const [completed,setCompleted]=useState(false);
    const form=(e)=>
    {
        data.people.push({id:cnt+1,name:e.target.uname.value,status:false})
        setCnt(cnt+1);
        setData(data);
        console.log(data);
        setInsertf(false);
        // e.preventDefault();
    }
    const front=(e)=>
    {
        data.people.splice(0,0,{id:cnt+1,name:e.target.uname.value,status:false})
        setCnt(cnt+1);
        setData(data);
        console.log(data);
        setInsertl(false);
        // e.preventDefault();
    }
    const b=()=>{
            return <>
            <form onSubmit={form}>
                <label>Name</label>
                <input type="text" id="uname"></input>
                <input type="submit" value="Insert"></input>
            </form>
            </>
    }
    const f=()=>{
        return <>
        <form onSubmit={front}>
            <label>Name</label>
            <input type="text" id="uname"></input>
            <input type="submit" value="Insert"></input>
        </form>
        </>
}
const del=(uid)=>{
    try
    {
        
        var idx=data.people.findIndex((obj)=>obj.id===uid);
        
        if(idx!==-1)
        {
            data.people.splice(idx,1);
            setData({...data});
        }
    }catch(err)
    {
        console.log(err);
    }
}
const repla=(e)=>
{
            var idx=data.people.findIndex((obj)=>obj.id===up);

    data.people[idx].name=e.target.uname.value;
    setUp('');
                setData({...data});

}
const upd=(e)=>{
    return <>
    <form onSubmit={repla}>
        <label>Name</label>
        <input type="text" id="uname" value={updval} onChange={(e)=>{setUpdval(e.target.value)}}></input>
        <input type="submit" value="Update"></input>
    </form>
    </>
}  
if(pending)
  var rows=data.people.map((val,index)=>{if(!val.status){return <tr key={val.id}><td><input type="checkbox" onClick={(e)=>{data.people[index].status=e.target.checked;console.log(data)}} defaultChecked={val.status}></input></td><td>{val.name}</td><td><button onClick={()=>{setUp(val.id); setUpdval(data.people[val.id].name);}}>Update</button></td><td><button onClick={()=>del(val.id)}>Delete</button></td></tr>}});
else if(completed)
var rows=data.people.map((val,index)=>{if(val.status) { return <tr key={val.id}><td><input type="checkbox" key={val.id} onClick={(e)=>{data.people[index].status=e.target.checked;console.log(data)}} defaultChecked={val.status} ></input></td><td>{val.name}</td><td><button onClick={()=>{setUp(val.id); setUpdval(data.people[val.id].name);}}>Update</button></td><td><button onClick={()=>del(val.id)}>Delete</button></td></tr>}});
else
  var rows=data.people.map((val,index)=><tr key={val.id}><td><input type="checkbox" onClick={(e)=>{
    data.people[index].status=e.target.checked;console.log(data)}}  defaultChecked={val.status}  ></input></td><td>{val.name}</td><td><button onClick={()=>{setUp(val.id); setUpdval(data.people[val.id].name);}}>Update</button></td><td><button onClick={()=>del(val.id)}>Delete</button></td></tr>);



   // var rows=data.people.map((val,index)=><tr key={val.id}><td><input type="checkbox" onClick={(e)=>{data.people[val.id].status=e.target.checked;console.log(data)}} ></input></td><td>{val.name}</td><td><button onClick={()=>{setUp(val.id); setUpdval(data.people[val.id].name);}}>Update</button></td><td><button onClick={()=>del(val.id)}>Delete</button></td></tr>);
    return (
    <>
    {/* {rows} */}
    <div className='special'>
     <ul className='operations'>
      <li>
      <button onClick={()=>{setInsertl(true)}}> Insert Front </button>
      </li>
      <li>
      <button onClick={()=>{setInsertf(true)}}> Insert Last </button>
      </li>
      <li>
      <button onClick={()=>{setPending(true);setCompleted(false)}}> Pending </button>
      </li>
      <li>
      <button onClick={()=>{setCompleted(true);setPending(false)}}> Completed </button>
      </li>
      
      <li>
      <button onClick={()=>{setCompleted(false);setPending(false)}}> ALL </button>
      </li>
      </ul>
      
      {insertf?(b()):(<></>)}
      {insertl?(f()):(<></>)}
      <table className='center'>
        <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Update</th>
            <th>Delete</th>

        </tr>
        {rows}
      </table>
      {up!==''?(upd()):(<></>)}
      </div>
    </>)
}
