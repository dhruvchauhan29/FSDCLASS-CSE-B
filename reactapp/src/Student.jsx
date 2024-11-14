// import React from 'react';
// import './student.css';

// function Student({data}) {
//   // JSON.stringify(data);
//   return (
//     <div className='icard'>
      
//         <table>
//             <tbody>
//                 <tr><td colSpan={2}>{data.college}</td></tr>
                
//                 <tr><td>Name</td><td>{data.name}</td></tr>
//                 <tr><td>Branch</td><td>{data.branch}</td></tr>
//                 <tr><td>sec</td><td>{data.sec}</td></tr>
//                 <tr><td>Rollno</td><td>{datarollno}</td></tr>
//             </tbody>
//         </table>
//     </div>
//   )
// }

// export default Student;
import React from 'react';
import './student.css';

function Student({ data }) {
  return (
    <div className='icard'>
      <table>
        <tbody>
          <tr><td colSpan={2}>{data.college}</td></tr>
          <tr><td>Name</td><td>{data.name}</td></tr>
          <tr><td>Branch</td><td>{data.branch}</td></tr>
          <tr><td>Section</td><td>{data.sec}</td></tr>
          <tr><td>Roll No</td><td>{data.rollno}</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Student;
