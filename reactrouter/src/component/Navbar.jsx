import React from "react";
import "./Navbar.css";
import {Link,NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <navbar id="navbar">
        <div id="logo">React Router</div>
        <div id="hacg">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Github</a>

          
        </div>
        <div id="login">
          <a href="">Login</a>
          <a href="">Get started</a>
        </div>
      </navbar>
    </div>
  );
}

export default Navbar;
