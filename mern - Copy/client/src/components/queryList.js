import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Query = (props) => (
 <tr>
   <td>{props.query.prediction_key}</td>
   <td>{props.query.filler0}</td>
   <td>{props.query.filler1}</td>
   <td>{props.query.filler2}</td>
   <td>{props.query.filler3}</td>
 </tr>
);

export default function QueryList() {
 const [queries, setQueries] = useState([]);

 // This method fetches the mass from the database.
 useEffect(() => {
   async function getQueries() {
     const response = await fetch(`http://localhost:5050/query/`);
     console.log(response)
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const queries = await response.json();
     setQueries(queries);
   }

   getQueries();

   return;
 }, [queries.length]);

 // This method will map out the ma on the table
 function queryList() {
   return queries.map((query) => {
     return (
       <Query
         query={query}
         key={query._id}
       />
     );
   });
 }
 
 // This following section will display the table with the mass of individuals.
 return (
   <div>
     <h3>Query Results</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>prediction_key</th>
           <th></th>
           <th></th>
         </tr>
       </thead>
       <tbody>{queryList()}</tbody>
     </table>
   </div>
 );
}
