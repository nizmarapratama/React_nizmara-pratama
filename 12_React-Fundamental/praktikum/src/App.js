import React from "react";
import "./App.css";

function App() {
  const todos = [
    {
      id: 1,
      title: "Membuat Komponent",
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
  ];
  return (
    <div className="container">
      <div className="container-item-header">
        <h3>To Do Apps</h3>
        <hr />
      </div>
      <div className="container-item main-section">
        {todos.length !== 0 ? (
          todos.map((todo) => {
            const { id, title, completed } = todo;
            return (
              <p key={id} className={completed ? "todo-title todo-title-done" : "todo-title"}>
                {title}
              </p>
            );
          })
        ) : (
          <p>Now Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;