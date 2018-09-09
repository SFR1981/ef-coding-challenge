import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/table">Table View</Link>
    </li>
    <li>
      <Link to="/cloud">Word Cloud View</Link>
    </li>
  </ul>
)



export default NavBar;
