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
          completed: true,
        },
        {
          id: 2,
          title: "Mengerjakan Assignment",
          completed: false,
        },
        {
          id: 3,
          title: "Membuat Summary",
          completed: true,
        },
        {
          id: 4,
          title: "Mengerjakan Pilihan ganda",
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
    let indexLastItemOfArr = this.state.data[this.state.data.length - 1].id;
    const newTask = { id: indexLastItemOfArr + 1, ...newTodo };
    this.setState({ data: [...this.state.data, newTask] });
  };
  handleCheckboxChange = (id) => {
    const newToDoList = this.state.data.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      return todo;
    });
    this.setState({ data: newToDoList });
  };
  render() {
    return (
      <div className="home">
        <h1 className="title">ToDoS</h1>
        <ToDoInput tambahToDo={this.tambahToDo} />
        <ToDoList data={this.state.data} hapusToDo={this.hapusToDo} handleChange={this.handleCheckboxChange} />
      </div>
    );
  }
}

export default Home;