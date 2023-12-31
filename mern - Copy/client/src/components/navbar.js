import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

import DropdownMenu from "./dropdown";
import "./dropdown.css"
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
          <img alt="Home Button" style={{"width" : 25 + '%'}} ></img>
       </NavLink>
       <NavLink className="navbar-brand" to="/create">
          <img alt="create" style={{"width" : 25 + '%'}} ></img>
       </NavLink>
       <NavLink className="navbar-brand" to="/query">
          <img alt="Query" style={{"width" : 25 + '%'}} ></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>

      <DropdownMenu/>
     </nav>
   </div>
 );
}
