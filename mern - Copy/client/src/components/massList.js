import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Mass = (props) => (
 <tr>
   <td>{props.mass.prediction_key}</td>
   <td>{props.mass.mass}</td>
   <td>{props.mass.filler0}</td>
   <td>{props.mass.filler1}</td>
   <td>{props.mass.filler2}</td>
   <td>{props.mass.filler3}</td>
 </tr>
);

export default function MassList() {
 const [masses, setMasses] = useState([]);

 // This method fetches the mass from the database.
 useEffect(() => {
   async function getMasses() {
     const response = await fetch(`http://localhost:5050/mass/`);

     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const masses = await response.json();
     setMasses(masses);
   }

   getMasses();

   return;
 }, [masses.length]);

 // This method will map out the ma on the table
 function massList() {
   return masses.map((mass) => {
     return (
       <Mass
         mass={mass}
         key={mass._id}
       />
     );
   });
 }
 
 // This following section will display the table with the mass of individuals.
 return (
   <div>
     <h3>Mass List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>prediction_key</th>
           <th>Mass</th>
           <th></th>
           <th></th>
         </tr>
       </thead>
       <tbody>{massList()}</tbody>
     </table>
   </div>
 );
}
