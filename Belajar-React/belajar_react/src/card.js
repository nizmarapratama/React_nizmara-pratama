import React from "react";
import logo from "./logo.svg";

function Card(props) {
    return (
        <div className=Ca">
            <img src={logo} className="logo" alt="logo3" />
            <div className="card-body border-top">
                <p className="card-text">{props.name}</p>
            </div>
        </div>


export default Card;