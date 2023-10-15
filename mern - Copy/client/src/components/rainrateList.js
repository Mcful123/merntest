import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RainRate = (props) => (
 <tr>
   <td>{props.rainRate.prediction_key}</td>
   <td>{props.rainRate.rainRate}</td>
   <td>{props.rainRate.filler0}</td>
   <td>{props.rainRate.filler1}</td>
   <td>{props.rainRate.filler2}</td>
   <td>{props.rainRate.filler3}</td>
 </tr>
);

export default function RainRateList() {
 const [rainRates, setRainRates] = useState([]);

 // This method fetches the rainRate from the database.
 useEffect(() => {
   async function getRainRates() {
     const response = await fetch(`http://localhost:5050/rainRate/`);

     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const rainRates = await response.json();
     setRainRates(rainRates);
   }

   getRainRates();

   return;
 }, [rainRates.length]);

 // This method will map out the ma on the table
 function rainRateList() {
   return rainRates.map((rainRate) => {
     return (
       <RainRate
         rainRate={rainRate}
         key={rainRate._id}
       />
     );
   });
 }
 
 // This following section will display the table with the rainRate of individuals.
 return (
   <div>
     <h3>RainRate List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>prediction_key</th>
           <th>RainRate</th>
           <th></th>
           <th></th>
         </tr>
       </thead>
       <tbody>{rainRateList()}</tbody>
     </table>
   </div>
 );
}
