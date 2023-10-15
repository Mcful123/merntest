import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RandomChar = (props) => (
 <tr>
   <td>{props.randomChar.prediction_key}</td>
   <td>{props.randomChar.char}</td>
   <td>{props.randomChar.filler0}</td>
   <td>{props.randomChar.filler1}</td>
   <td>{props.randomChar.filler2}</td>
   <td>{props.randomChar.filler3}</td>
 </tr>
);

export default function RandomCharList() {
 const [randomChars, setRandomChars] = useState([]);

 // This method fetches the randomChar from the database.
 useEffect(() => {
   async function getRandomChars() {
     const response = await fetch(`http://localhost:5050/randomChar/`);

     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const randomChars = await response.json();
     setRandomChars(randomChars);
   }

   getRandomChars();

   return;
 }, [randomChars.length]);

 // This method will map out the ma on the table
 function randomCharList() {
   return randomChars.map((randomChar) => {
     return (
       <RandomChar
         randomChar={randomChar}
         key={randomChar._id}
       />
     );
   });
 }
 
 // This following section will display the table with the randomChar of individuals.
 return (
   <div>
     <h3>RandomChar List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>prediction_key</th>
           <th>RandomChar</th>
           <th></th>
           <th></th>
         </tr>
       </thead>
       <tbody>{randomCharList()}</tbody>
     </table>
   </div>
 );
}
