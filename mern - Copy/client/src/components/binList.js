import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Bin = (props) => (
 <tr>
   <td>{props.bin.prediction_key}</td>
   <td>{props.bin.bin}</td>
   <td>{props.bin.filler0}</td>
   <td>{props.bin.filler1}</td>
   <td>{props.bin.filler2}</td>
   <td>{props.bin.filler3}</td>
 </tr>
);

export default function BinList() {
 const [bins, setBins] = useState([]);

 // This method fetches the bin from the database.
 useEffect(() => {
   async function getBins() {
     const response = await fetch(`http://localhost:5050/bin/`);

     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const bins = await response.json();
     setBins(bins);
   }

   getBins();

   return;
 }, [bins.length]);

 // This method will map out the ma on the table
 function binList() {
   return bins.map((bin) => {
     return (
       <Bin
         bin={bin}
         key={bin._id}
       />
     );
   });
 }
 
 // This following section will display the table with the bin of individuals.
 return (
   <div>
     <h3>Bin List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>prediction_key</th>
           <th>Bin</th>
           <th></th>
           <th></th>
         </tr>
       </thead>
       <tbody>{binList()}</tbody>
     </table>
   </div>
 );
}
