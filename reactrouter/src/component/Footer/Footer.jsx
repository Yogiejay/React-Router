import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer(){
    return (
        <div id="footer">
            <div id="logoo">React-Router</div>
            <div id="links">
                <div id = "rfl">
                    <label>RESOURCES</label>
                    <label>Home</label>
                    <Link to="/about" className="color white">About</Link>
                </div>
                <div id="ha">
                    <label>FOLLOW US</label>
                    <label>Github</label>
                    <label>Discord</label>
                </div>
                <div id="pt">
                    <label>Legal</label>
                    <label>Privacy Policy</label>
                    <label>Terms & Conditions</label>
                </div>

            </div>
        </div>
    )
}
export default Footer;