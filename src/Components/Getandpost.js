import React from 'react'
import '../Resources/CSS/getandpost.css';
import axios from 'axios';
export default function Getandpost() {
const push=(e)=>{
    const name=e.target.uname.value
    console.log(name);
    var data=new Object({
        name:e.target.uname.value,
        age:e.target.uage.value,
        roll:e.target.uroll.value
    })
    console.log(data);
    axios.post("https://63fb19262027a45d8d5ffa82.mockapi.io/pro/details",data).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err);
    })
    e.preventDefault();
}
  return (
    <>
    <div className='special'>
    <form onSubmit={push}>
        <label>Name </label>
        <input type="text" id="uname"></input><br></br><br></br>
        <label>Age </label>
        <input type="number" id="uage"></input>    <br></br><br></br>
        <label>Roll No </label>
        <input type="number" id="uroll"></input><br></br><br></br>
        <input type="submit" value="Submit"></input>
        <input type="reset" value="Clear"></input><br></br><br></br>
    </form>
    
    </div>

    </>
  )
}
