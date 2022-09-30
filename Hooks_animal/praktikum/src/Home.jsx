import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./features/counterSlice";
import { Button } from "react-bootstrap";

const Home = () => {
    const count = useSelector((state) => state.counter.value);
    const email = useSelector((state) => state.user.email);
    const dispatch = useSelector(state);
    return (
        <div className="d-flex flex-column align-items-center">
            <span className="display-3"></span>
            <span className="display-4">{count}</span>
            <button className="mb-3" onClick={() => dispatch()}>
                +
            </button>
        <link to="/animal" className="mb-2">
            <button className="btn btn-primary">Animal</button>
            </link>
            <Link to="/form">
            <button className="btn btn-success">Form</button>
            </Link>
            <Link to="/read-article">
            <button className="btn btn-success">Read Article</button>
            </Link>
            <Link to="/create-article">
            <button className="btn btn-success">Create Article</button>
            </Link>
    </div>
    )
}
    
  

export default Home;