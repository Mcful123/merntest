import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Query() {
 const [form, setForm] = useState({
   color_: "",
   minTemp_: -9999,
   maxTemp_: 9999,
   composition_: "",
   complength_: 10,
   minMass_: -9999,
   maxMass_: 9999,
   minPress_: -9999,
   maxPress_: 9999,
   minrr_: -9999,
   maxrr_: 9999,

 });
 const navigate = useNavigate();

 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }

 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();

   // When a post request is sent to the create url, we'll add a new record to the database.
   const newQuery = { ...form };
   const response = await fetch("http://localhost:5050/query", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newQuery),
   })
   .catch(error => {
     window.alert(error);
     return;
   });

  //  setForm({
  //   color_: "",
  //   minTemp_: -9999,
  //   maxTemp_: 9999,
  //   composition_: "",
  //   complength_: 10,
  //   minMass_: -9999,
  //   maxMass_: 9999,
  //   minPress_: -9999,
  //   maxPress_: 9999,
  //   minrr_: -9999,
  //   maxrr_: 9999,
  // });
   navigate("/");
 }

 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Configure Filters</h3>
     <form onSubmit={onSubmit}>
       <div className="mb-4 align-middle">
         <label htmlFor="color">Color::</label>
         <input
           type="text"
           id="color"
           value={form.color_}
           onChange={(e) => updateForm({ color_: e.target.value })}
         />
       </div>
       <div className="mb-4 align-middle">
         <label htmlFor="color">minimum Temperature::</label>
         <input
           type="number"
           id="minTemp_"
           value={form.minTemp_}
           onChange={(e) => updateForm({ minTemp_: e.target.value })}
         />
       </div>
       <div className="mb-4 align-middle">
         <label htmlFor="color">maximum Temperature::</label>
         <input
           type="number"
           id="maxTemp_"
           value={form.maxTemp_}
           onChange={(e) => updateForm({ maxTemp_: e.target.value })}
         />
       </div>
       <div className="mb-4 align-middle">
         <label htmlFor="color">minimum Mass::</label>
         <input
           type="number"
           id="minMass_"
           value={form.minMass_}
           onChange={(e) => updateForm({ minMass_: e.target.value })}
         />
       </div>
       <div className="mb-4 align-middle">
         <label htmlFor="color">maximum Mass::</label>
         <input
           type="number"
           id="maxMass_"
           value={form.maxMass_}
           onChange={(e) => updateForm({ maxMass_: e.target.value })}
         />
       </div>
       <div className="mb-4 align-middle">
         <label htmlFor="color">minimum Pressure::</label>
         <input
           type="number"
           id="minPress_"
           value={form.minPress_}
           onChange={(e) => updateForm({ minPress_: e.target.value })}
         />
       </div>
       <div className="mb-4 align-middle">
         <label htmlFor="color">maximum Pressure::</label>
         <input
           type="number"
           id="maxPress_"
           value={form.maxPress_}
           onChange={(e) => updateForm({ maxPress_: e.target.value })}
         />
       </div>
       <div className="mb-4 align-middle">
         <label htmlFor="color">minimum Rain Rate::</label>
         <input
           type="number"
           id="minrr_"
           value={form.minrr_}
           onChange={(e) => updateForm({ minrr_: e.target.value })}
         />
       </div>
       <div className="mb-4 align-middle">
         <label htmlFor="color">maximum Rain Rate::</label>
         <input
           type="number"
           id="maxrr_"
           value={form.maxrr_}
           onChange={(e) => updateForm({ maxrr_: e.target.value })}
         />
       </div>
       <div className="mb-4 align-middle">
         <label htmlFor="color">number of components::</label>
         <input
           type="number"
           id="complength_"
           value={form.complength_}
           onChange={(e) => updateForm({ complength_: e.target.value })}
         />
       </div>
       <div className="mb-4 align-middle">
         <label htmlFor="color">contains components::</label>
         <input
           type="text"
           id="composition_"
           value={form.composition_}
           onChange={(e) => updateForm({ composition: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Send Query"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}
