import React from "react"; 

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Todo App",
      todos: ["membuat komponen", "unit testing", "setup development enviroment", "deploy ke server"],
      todoInput: "",
    };
  }

  handleTodoInput(evt) {
    console.log(evt.target.value);
    this.setState({
      todoInput: evt.target.value,
    });
  }

  handleSave () {
    const newTodos = this.state.todos.concat(this.state.todoInput);
    this.setState({
      todos: newTodos,
      todoInput: "",
    });
  }

  render () {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <hr />
        <input type="text" value={this.state.todoInput} onChange={(evt) => this.handleTodoInput(evt)} />
        <button onClick={() => this.handleSave()}>Save</button>
        {this.state.todos.map((todo, idx) => {
            return (
              <div>
                <p key={idx}>{todo}</p>
              </div>
            )
          })}
      </div>
    );
  }
}

export default Todo;
