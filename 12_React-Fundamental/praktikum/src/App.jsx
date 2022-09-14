import React from "react";
import "./App.css";
import Home from "./Home.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            data: [
                {
                    id: 1,
                    title: "Membuat Komponen",
                    completed: true,
                },
                {
                    id: 2,
                    title: "Unit Testing",
                    completed: false,
                },
                {
                    id: 3,
                    title: "Setup Development Environment",
                    completed: true,
                },
                {
                    id: 4,
                    title: "Deploy ke server",
                    completed: false,
                },
            ]
        }
    }
}