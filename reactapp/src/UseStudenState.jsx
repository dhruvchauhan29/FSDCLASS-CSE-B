import React, { useState } from 'react'
import "./UseStudentState.css";
function UseStudenState() {
  const [count,setCount]=useState(20);
  const doIncrement=()=>{
    console.log(count);
    setCount(count+10);
  }
  const doDecrement=()=>{
    setCount(count-5);
  }
  return (
   <>
     <div >{count}</div>
     <button onClick={doIncrement}>Click</button>
     <button onClick={doDecrement}>Click d</button>
   </>
  )
}

export default UseStudenState;