import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
        <link to="/animal">
            <button className="btn btn-primary">Animal</button>
            </link>
            <Link>
            <button className="btn btn-success">Form</button>
            </Link>
    </div>
    )
}
    
  

export default Home;