const ToDoList = ({data, hapusToDo, handleChange}) => {
    return ( 
      <div style={{margin: "10px"}}>
          {data.map((todo) => (
            <div className="todo-list" key={todo.id}>
              <input 
              type="checkbox" 
              name="todo" 
              id="todo" 
              checked={todo.completed}
              onChange={() => {handleChange(todo.id)}}/>
              <p style={todo.completed?{textDecoration:"line-through", color:"grey"}:{textDecoration:"none"}}>{todo.title}</p>
              <button onClick={() => {
                hapusToDo(todo.id)
              }}
              className="btn-delete-list">Delete</button>
            </div>
          ))}
      </div>
     );
  }
   
  export default ToDoList;