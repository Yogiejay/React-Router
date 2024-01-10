import "./App.css";
import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "./component/Header/Navbar.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Home from "./component/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />
      <Footer></Footer>
    </div>
  );
}

export default App;
