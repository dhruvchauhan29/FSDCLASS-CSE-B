import React, { useEffect, useState } from 'react'

function MyUseEffect() {
  const [count,setCount]=useState(10);
  const [pointer,setPointer]=useState(20);

  useEffect(()=>{
    console.log("hi inside useEffect");
  },[])


  return (
    // <div>MyUseEffect</div>
    <button onClick={()=>setCount(count+1)} >click</button>
  )
}

export default MyUseEffect;