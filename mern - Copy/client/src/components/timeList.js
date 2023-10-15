import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Time = (props) => (
 <tr>
   <td>{props.time.prediction_key}</td>
   <td>{props.time.timestamp}</td>
   <td>{props.time.filler0}</td>
   <td>{props.time.filler1}</td>
   <td>{props.time.filler2}</td>
   <td>{props.time.filler3}</td>
 </tr>
);

export default function TimeList() {
 const [times, setTimes] = useState([]);

 // This method fetches the time from the database.
 useEffect(() => {
   async function getTimes() {
     const response = await fetch(`http://localhost:5050/time/`);

     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const times = await response.json();
     setTimes(times);
   }

   getTimes();

   return;
 }, [times.length]);

 // This method will map out the ma on the table
 function timeList() {
   return times.map((time) => {
     return (
       <Time
         time={time}
         key={time._id}
       />
     );
   });
 }
 
 // This following section will display the table with the time of individuals.
 return (
   <div>
     <h3>Time List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>prediction_key</th>
           <th>Time</th>
           <th></th>
           <th></th>
         </tr>
       </thead>
       <tbody>{timeList()}</tbody>
     </table>
   </div>
 );
}
