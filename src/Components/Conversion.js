import React from 'react'
import { useState } from 'react';
export default function Conversion () {
    const [amt1,setAmt1]=useState(0);
    const [amt2,setAmt2]=useState(0);
    const data={
        USD:1,
        EUR:0.94,
        INR:82.74,
        AUR:1.46
    }
    const [country1,setCountry1]=useState('USD');
    const [country2,setCountry2]=useState('INR');
    function c1(e)
    {
        setCountry1(e.target.value);
        const rate=(data[e.target.value]/data[country2]);
     
        setAmt1(rate*amt2);
    }
    function c2(e)
    {
        setCountry2(e.target.value);
        const rate=(data[e.target.value]/data[country1]);
        setAmt2(rate*amt1);
    }
    return (
    <>
    <form>
        <label>{country1} {amt1} to {country2} {amt2}</label>                                                                                                <br></br><br></br>
        <input type="number" onChange={(e)=>{ setAmt1(e.target.value);setAmt2(((data[country2]/data[country1]))*e.target.value);}} value={amt1}></input>
        <select value={country1} onChange={c1}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="AUR">AUR</option>
        </select>
        <br></br><br></br>
        <br></br>
        <input type="number" value={amt2} onChange={(e)=>{setAmt2(e.target.value);setAmt1(e.target.value*((data[country1]/data[country2])))}}></input>
        <select value={country2} onChange={c2}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="AUR">AUR</option>
        </select>
    </form>
    </>
  )
}
