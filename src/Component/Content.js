import React from "react";
import img from "../img/Group 77.png";
export default function Content() {
    return (
        <main>
            <div className="container">
                <div className="image-holder">
                    <img src={img} alt="pic" className="image"></img></div>
                <div className="info">
                    <h1 className="info-header">Online Experiences</h1>
                    <p className="info-data">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                    </p>
                </div>
            </div>
        </main>
    );
}