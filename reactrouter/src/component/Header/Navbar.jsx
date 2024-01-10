import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <navbar id="navbar">
        <Link to="/"><div id="logo">React Router</div></Link>
        <div id="hacg">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Github</Link>
        </div>
        <div id="login">
        <Link to="/">Login</Link>
        <Link to="/">Get started</Link>
        </div>
      </navbar>
    </div>
  );
}

export default Navbar;
