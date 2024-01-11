
import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <navbar id="navbar">
        {/* <Link to="/"><div id="logo">React Router</div></Link> */}
        <div id="hacg">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/github">Github</Link>
        </div>
        {/* <div id="login">
        <Link to="/login">Login</Link>
        <Link to="/getstarted">Get started</Link>
        </div> */}
      </navbar>
    </div>
  );
}

export default Navbar;
