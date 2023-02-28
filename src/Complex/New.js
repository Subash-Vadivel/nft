import React,{useState,useReducer} from 'react'
import A from './A'
import B from './B'
import C from './C'

export const setC = React.createContext();
export default function New() {
const ini=0;
const reducer=(state,action)=>{
  switch(action.type)
  {
    case "inc":
       return state+1;
    case "dec":
        return state-1;
    case "reset":
        return 0;
    default:
        return state;
  }
}
const [count,dispatch]=useReducer(reducer,ini);


  return (
    <div className='special'>
        <h3>Count : {count}</h3>
<div className='special'>
  <setC.Provider value={dispatch}>

<A/>
<B/>
<C/>
</setC.Provider>

</div>

    </div>
  )
}
