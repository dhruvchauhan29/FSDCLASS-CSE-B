import React from 'react';
import './student.css';

function Student({data}) {
  
  return (
    <div className='icard'>
      {JSON.stringify(data)}
        {/* <table>
            <tbody>
                <tr><td colSpan={2}>{props.college}</td></tr>
                <tr><td style={{widows}}>{props.pic}</td></tr>
                <tr><td>Name</td><td>{props.name}</td></tr>
                <tr><td>Branch</td><td>{props.branch}</td></tr>
                <tr><td>sec</td><td>{props.sec}</td></tr>
                <tr><td>Rollno</td><td>{props.rollno}</td></tr>
            </tbody>
        </table> */}
    </div>
  )
}

export default Student;