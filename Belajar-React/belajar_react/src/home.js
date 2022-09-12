import React from "react";
import logo from './logo.svg';

function Home() {
    return (
        <div className="container d-flex flex-column justivy-content-start align-itms-center">
            <h1 className="display-2">Portofolio</h1>
            <div className="container d-flex flex-row justify-containt-between align-items-center">
                <img src={logo} className="logo" alt="logo1"/>
                <img src={logo} className="logo" alt="logo2"/>
            </div>
            <h1 className="display-5">My Project</h1>
            <div className="d-flex flex-row justify-contenct around align-items-center">
                <card name="project 1" />
                <card name="project 2" />
            </div>
        </div>
    )
}


export default Home;