import React from "react";
import logo from "../img/airbnb 1.png"
export default function Nav() {
    return (
        <nav>
            <div className="container">
                <img src={logo} alt="Logo" className="img"></img>
            </div>
        </nav>
    );
}