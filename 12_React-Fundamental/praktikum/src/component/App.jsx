import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./ToDoApp.jsx";
import ToDoApp from "./ToDoApp.jsx";

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
                }
            ],
            isShow: true
        };
    }

    componentDidMount() {
        this.setState({
            title: "Update"
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
        console.log(this.state.title);
    }

    handChangeItemBackgroud(index) {
        const updatedData = [...this.state.data];
        updatedData[index].isRemove = !updatedData[index].isRemove;
        this.setState({
            data: updatedData
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((num, index) => {
                        return <ToDoApp key={index}
                        handChangeItemBackgroud={() => this.handChangeItemBackgroud(index)}
                        isRemove={num.isRemove}
                        title={num.title}/>;
                    })
                }
            </div>
        );
    }
}

export default App;