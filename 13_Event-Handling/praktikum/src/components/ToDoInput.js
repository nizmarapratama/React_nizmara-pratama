import { Component } from "react";

class ToDoInput extends Component {
  state = {
    id: "",
    title: "",
    completed: true,
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const formIsNotEmpty = this.state.title;
    if (formIsNotEmpty) {
      const newData = {
        title: this.state.title,
        completed: this.state.completed,
      };
      this.props.tambahToDo(newData);
      this.setState({
        title: "",
      });
    } else {
      alert("KUDU diisi, jangan dilewatkan !!! ");
    }
  };
  render() {
    return (
      <div className="container-todo">
        <input
          type="text"
          name="title"
          placeholder="Add todo..."
          value={this.state.title}
          onChange={(e) => {
            this.onChange(e);
          }}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default ToDoInput;