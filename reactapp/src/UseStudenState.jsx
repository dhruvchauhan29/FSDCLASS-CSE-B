import React, { useState } from 'react'

function UseStudenState() {
    const [count,setCount]=useState(20);
  return (
    <div>{count}</div>
  )
}

export default UseStudenState