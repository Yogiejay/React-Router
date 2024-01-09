import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
