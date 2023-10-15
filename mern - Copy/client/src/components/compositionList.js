import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Composition = (props) => (
 <tr>
   <td>{props.composition.prediction_key}</td>
   <td>{props.composition.composition}</td>
   <td>{props.composition.filler0}</td>
   <td>{props.composition.filler1}</td>
   <td>{props.composition.filler2}</td>
   <td>{props.composition.filler3}</td>
 </tr>
);

export default function CompositionList() {
 const [compositions, setCompositions] = useState([]);

 // This method fetches the composition from the database.
 useEffect(() => {
   async function getCompositions() {
     const response = await fetch(`http://localhost:5050/composition/`);

     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const compositions = await response.json();
     setCompositions(compositions);
   }

   getCompositions();

   return;
 }, [compositions.length]);

 // This method will map out the ma on the table
 function compositionList() {
   return compositions.map((composition) => {
     return (
       <Composition
         composition={composition}
         key={composition._id}
       />
     );
   });
 }
 
 // This following section will display the table with the composition of individuals.
 return (
   <div>
     <h3>Composition List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>prediction_key</th>
           <th>Composition</th>
           <th></th>
           <th></th>
         </tr>
       </thead>
       <tbody>{compositionList()}</tbody>
     </table>
   </div>
 );
}
