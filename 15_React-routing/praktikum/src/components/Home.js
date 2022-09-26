import { Component } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "Mengerjakan Exercise",
          completed: false,
        },
        {
          id: 2,
          title: "Mengerjakan Assignment",
          completed: false,
        },
        {
          id: 3,
          title: "Membuat Resume",
          completed: false,
        },
        {
          id: 4,
          title: "Mengerjakan Pilgan",
          completed: false,
        },
      ],
    };
  }
  hapusToDo = (id) => {
    const newToDOList = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: newToDOList });
  };
  tambahToDo = (newTodo) => {
    const newTask = { id: this.state.data.length + 1, ...newTodo };
    this.setState({ data: [...this.state.data, newTask] });
  };
  handleCheckboxChange = (id) => {
    const newToDoList = this.state.data.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      return todo;
    });
    this.setState({ data: newToDoList });
    console.log(newToDoList);
  };
  render() {
    return (
      <div className="home">
        <h1 className="title">TODOs</h1>
        <ToDoInput tambahToDo={this.tambahToDo} />
        <ToDoList data={this.state.data} hapusToDo={this.hapusToDo} handleChange={this.handleCheckboxChange} />
      </div>
    );
  }
}

export default Home;