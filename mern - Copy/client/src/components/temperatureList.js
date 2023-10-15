import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Temperature = (props) => (
 <tr>
   <td>{props.temperature.prediction_key}</td>
   <td>{props.temperature.temperature}</td>
   <td>{props.temperature.filler0}</td>
   <td>{props.temperature.filler1}</td>
   <td>{props.temperature.filler2}</td>
   <td>{props.temperature.filler3}</td>
 </tr>
);

export default function TemperatureList() {
 const [temperatures, setTemperatures] = useState([]);

 // This method fetches the temperature from the database.
 useEffect(() => {
   async function getTemperatures() {
     const response = await fetch(`http://localhost:5050/temperature/`);

     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const temperatures = await response.json();
     setTemperatures(temperatures);
   }

   getTemperatures();

   return;
 }, [temperatures.length]);

 // This method will map out the ma on the table
 function temperatureList() {
   return temperatures.map((temperature) => {
     return (
       <Temperature
         temperature={temperature}
         key={temperature._id}
       />
     );
   });
 }
 
 // This following section will display the table with the temperature of individuals.
 return (
   <div>
     <h3>Temperature List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>prediction_key</th>
           <th>Temperature</th>
           <th></th>
           <th></th>
         </tr>
       </thead>
       <tbody>{temperatureList()}</tbody>
     </table>
   </div>
 );
}
