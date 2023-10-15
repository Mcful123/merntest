import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pressure = (props) => (
 <tr>
   <td>{props.pressure.prediction_key}</td>
   <td>{props.pressure.pressure}</td>
   <td>{props.pressure.filler0}</td>
   <td>{props.pressure.filler1}</td>
   <td>{props.pressure.filler2}</td>
   <td>{props.pressure.filler3}</td>
 </tr>
);

export default function PressureList() {
 const [pressures, setPressures] = useState([]);

 // This method fetches the pressure from the database.
 useEffect(() => {
   async function getPressures() {
     const response = await fetch(`http://localhost:5050/pressure/`);

     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const pressures = await response.json();
     setPressures(pressures);
   }

   getPressures();

   return;
 }, [pressures.length]);

 // This method will map out the ma on the table
 function pressureList() {
   return pressures.map((pressure) => {
     return (
       <Pressure
         pressure={pressure}
         key={pressure._id}
       />
     );
   });
 }
 
 // This following section will display the table with the pressure of individuals.
 return (
   <div>
     <h3>Pressure List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>prediction_key</th>
           <th>Pressure</th>
           <th></th>
           <th></th>
         </tr>
       </thead>
       <tbody>{pressureList()}</tbody>
     </table>
   </div>
 );
}
