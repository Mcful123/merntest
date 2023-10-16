import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RandomNumber = (props) => (
 <tr>
   <td>{props.randomNumber.prediction_key}</td>
   <td>{props.randomNumber.randInt}</td>
   <td>{props.randomNumber.filler0}</td>
   <td>{props.randomNumber.filler1}</td>
   <td>{props.randomNumber.filler2}</td>
   <td>{props.randomNumber.filler3}</td>
 </tr>
);

export default function RandomNumberList() {
 const [randomNumbers, setRandomNumbers] = useState([]);

 // This method fetches the randomNumber from the database.
 useEffect(() => {
   async function getRandomNumbers() {
     const response = await fetch(`http://localhost:5050/randomNumber/`);

     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const randomNumbers = await response.json();
     setRandomNumbers(randomNumbers);
   }

   getRandomNumbers();

   return;
 }, [randomNumbers.length]);

 // This method will map out the ma on the table
 function randomNumberList() {
   return randomNumbers.map((randomNumber) => {
     return (
       <RandomNumber
         randomNumber={randomNumber}
         key={randomNumber._id}
       />
     );
   });
 }
 
 // This following section will display the table with the randomNumber of individuals.
 return (
   <div>
     <h3>RandomNumber List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>prediction_key</th>
           <th>RandomNumber</th>
           <th></th>
           <th></th>
         </tr>
       </thead>
       <tbody>{randomNumberList()}</tbody>
     </table>
   </div>
 );
}
