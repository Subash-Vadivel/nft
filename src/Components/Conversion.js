import React from 'react'
import { useState } from 'react';
export default function () {
    const [amt1,setAmt1]=useState();
    const [amt2,setAmt2]=useState();
    const [rate1,setRate1]=useState(80);
    const [rate2,setRate2]=useState(1);
    const [country1,setCountry1]=useState('USD');
    const [country2,setCountry2]=useState('INR');
    const special=(e)=>{

        setCountry1(e.target.value)
        if(e.target.value==='USD')
        {
            setRate1(80);
            setAmt2(amt1*80);
        }
        if(e.target.value==='EUR')
        {
            setRate1(88);
            setAmt2(amt1*88);
        }
        if(e.target.value==='YEN')
        {
            setRate1(1.63);
            setAmt2(amt1*1.63);
        }
        if(e.target.value==='PAK')
        {
            setRate1(0.0488);
            setAmt2(amt1*0.0488);
        }
    }
    const special2=(e)=>{

        setCountry2(e.target.value)
        if(country2==='USD')
        {
            setRate2(80);
        }
        if(country2==='EUR')
        {
            setRate2(88);
        }
        if(country2==='YEN')
        {
            setRate2(1.63);
        }
        if(country2==='PAK')
        {
            setRate2(0.0488);
        }
    }
    return (
    <>
    <form>
        <label>{country1} {amt1} to {country2} {amt2}</label><br></br><br></br>
        <input type="number" onChange={(e)=>{ setAmt1(e.target.value);setAmt2((e.target.value)*rate1);}} value={amt1}></input>
        <select value={country1} onChange={special}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="YEN">YEN</option>
            <option value="PAK">PAK</option>
        </select>
        <br></br><br></br>
        <br></br>
        <input type="number" value={amt2} onChange={(e)=>{setAmt2(e.target.value);setAmt1(e.target.value/rate1)}}></input>

    </form>
    </>
  )
}
