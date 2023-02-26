import React from 'react'
import '../Resources/CSS/details.css';
import { useState } from 'react';
export default function Details() {
    const [data,setData]=useState({details:[]});
    const [name,setName]=useState();
    const [age,setAge]=useState();
    const [rollno,setRollno]=useState();
    const [searchv,Setsearchv]=useState();
    const [updatev,Setupdatev]=useState();
    const[up,setUp]=useState();
    const [result,setResult]=useState();
    const [updateName,setUpdateName]=useState();
    const [updateAge,setUpdateAge]=useState();
    const [box,setBox]=useState();
    const[flag,setFlag]=useState(0);
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
   
    const upd=()=>
    {
        console.log(updatev);
        try{
         var out=data.details.find((val)=>val.roll===updatev);
         
         if(out===undefined)
         {
            setUp('');
            setBox('');
            setUpdateName(null);
            setUpdateAge(null);
            setFlag(0);
         }
         else
         {
          
        setUp(<div>
            <h6>What to Update</h6>
            <h6><button onClick={()=>{setFlag(1);setBox(<h6 key="2">Name : <input type="text" value={updateName} onChange={(e)=>{setUpdateName(e.target.value);var obj=data.details.findIndex((o)=>o.roll===updatev);
        data.details[obj].n=e.target.value;setData({...data});
}}></input> </h6>);}}>
                Name</button>
            <button onClick={()=>{setFlag(1);setBox(<h6 key="1">Age : <input type="text" value={updateAge} onChange={(e)=>{setUpdateAge(e.target.value);var obj=data.details.findIndex((o)=>o.roll===updatev);
        data.details[obj].ag=e.target.value;setData({...data});
}}></input> </h6>);}}>
                Age</button>
            
            <br></br><br></br>
            
            </h6>
        </div>)
        }
        }
        catch(err)
        {
            setUp('');
                        setFlag(0);

            setBox('');
            setUpdateName('');
            setUpdateAge('');
        }
    }
    const delData=()=>{
            try
            {
                var out=data.details.findIndex((o)=>o.roll===updatev);
                
                console.log(out);
                if(out===-1)
                {

            setUp('');
            setBox('');
            setUpdateName(null);
            setUpdateAge(null);
            setFlag(0);
                }
                else if(out===0)
                {
                    
                    console.log("deleted first");
                  data.details.shift();
                  setData({...data})
                }
                else
                {
                    console.log("deleted");
                  data.details.splice(out,out);
                  setData({...data})
                }

            }
            catch(err)
            {
            setUp('');
            setBox('');
            setUpdateName(null);
            setUpdateAge(null);
            setFlag(0);

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
<br></br><br></br>
     
     <label style={{marginRight:"10px"}}>Enter Roll No</label>
     <input type="text" value={updatev} onChange={(e)=>Setupdatev(e.target.value)}></input><button onClick={upd}>Search</button>
            <button onClick={delData}>Delete</button>

     {up}

               {box}
               {flag===1?<button onClick={()=>{setBox('');setFlag(0);setUpdateName(null);setUpdateAge(null);}}> Update </button>:<></>}
  </>
)

}
