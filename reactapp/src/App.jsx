import React from 'react';
import Student from './Student';
import './App.css';
import UseStudenState from './UseStudenState';
import "./UseStudentState.css";
import ImageManipulation from './ImageManipulation';
function App() {
  // const h1 = <h1>hello</h1>;
  // const color = {
  //   backgroundColor: 'red',
  //   color: 'yellow',
  // };

  // const data = [
  //   {
  //     name: "Rahul",
  //     branch: "CSE",
  //     college: "ABES",
  //     rollno: "20",
  //     sec: "B",
  //   },
  //   {
  //     name: "Shivam",
  //     branch: "CSE",
  //     college: "ABES",
  //     rollno: "21",
  //     sec: "B",
  //   },
  //   {
  //     name: "Dhruv",
  //     branch: "CSE",
  //     college: "ABES",
  //     rollno: "22",
  //     sec: "B",
  //   }
  // ];
  
  return (
    // <div>
    //   <div style={color}>{h1}</div>
    //   <div className='st'>
    //     {
    //       data.map((ele) => (
    //         <Student data={ele} />
    //       ))
    //     }
    //   </div>
    // </div>
    <>
      
      {/* <h2>Hello</h2>
      <div className=''>
        <UseStudenState/>
      </div> */}
      <ImageManipulation/>
      
      
    </>
  );
}

export default App;
