import React, { useState } from 'react'

function UseFatchAPI() {
  const response=fetch('https://dummyjson.com/recipes');
  const [data,setData]=useState([]);
  response.then((res)=>{
    console.log(res);
    res.json().then((data)=>{
        console.log(data);
        setData(data);
    })
  }).catch((err)=>{
    console.log(err)
  }).then((res)=>{

  })
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default UseFatchAPI;