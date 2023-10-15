import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Color = (props) => (
 <tr>
   <td>{props.color.prediction_key}</td>
   <td>{props.color.color}</td>
   <td>{props.color.filler0}</td>
   <td>{props.color.filler1}</td>
   <td>{props.color.filler2}</td>
   <td>{props.color.filler3}</td>
 </tr>
);

export default function ColorList() {
 const [colors, setColors] = useState([]);

 // This method fetches the color from the database.
 useEffect(() => {
   async function getColors() {
     const response = await fetch(`http://localhost:5050/color/`);

     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const colors = await response.json();
     setColors(colors);
   }

   getColors();

   return;
 }, [colors.length]);

 // This method will map out the ma on the table
 function colorList() {
   return colors.map((color) => {
     return (
       <Color
         color={color}
         key={color._id}
       />
     );
   });
 }
 
 // This following section will display the table with the color of individuals.
 return (
   <div>
     <h3>Color List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>prediction_key</th>
           <th>Color</th>
           <th></th>
           <th></th>
         </tr>
       </thead>
       <tbody>{colorList()}</tbody>
     </table>
   </div>
 );
}
