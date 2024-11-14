import React from 'react'
import Student from './Student';
import './App.css'
function App() {
  const h1=<h1>hello</h1>;
  const color={
    backgroundColor:'red',
    color:'yellow'
  }
  const data=[
    {
      name:"Rahul",
      branch:"CSE",
      college:"ABES",
      rollno:"20",
      sec:"B",
    }
    ,{
      name:"Rahul",
      branch:"CSE",
      college:"ABES",
      rollno:"20",
      sec:"B",
    }
    ,{
      name:"Rahul",
      branch:"CSE",
      college:"ABES",
      rollno:"20",
      sec:"B",
    }
  ]
  return (
    <div>
        <div style={color}>{h1}</div>
        <div className='st'>
           <Student data={data}></Student>
           {/* <Student 
            name="Dhruv" 
            pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png'></img>}
            branch="CSE" 
            rollno="20" 
            college="ABES Engineering college"
            sec="B"
           ></Student>
           <Student 
            name="Dhruv" 
            pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png'></img>}
            branch="CSE" 
            rollno="20" 
            college="ABES Engineering college"
            sec="B"
           ></Student>
           <Student 
            name="Dhruv" 
            pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png'></img>}
            branch="CSE" 
            rollno="20" 
            college="ABES Engineering college"
            sec="B"
           ></Student> */}
        </div>
    </div>
  )
}

export default App