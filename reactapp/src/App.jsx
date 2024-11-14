import React from 'react'
import Student from './Student';
function App() {
  const h1=<h1>hello</h1>;
  const color={
    backgroundColor:'red',
    color:'yellow'
  }
  return (
    <div>
        <div style={color}>{h1}</div>
        <div>
           <Student 
            name="Dhruv" 
            pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png'></img>}
            branch="CSE" 
            rollno="20" 
            college="ABES Engineering college"
            sec="B"
           ></Student>
        </div>
    </div>
  )
}

export default App