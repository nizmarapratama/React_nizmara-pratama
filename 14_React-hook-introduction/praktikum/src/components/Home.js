import { useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const initialValue = [
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
    title: "Mengerjakan Summary",
    completed: false,
  }, 
  {
    id: 4,
    title: "Membaca Materi",
    completed: false,
  }, 
]
function Home () {
  const [data, setData] = useState(initialValue);

  const hapusToDo = (id) => {
    setData((oldData) => oldData.filter((item) => {
      return item.id !== id
    }))

  }
  const tambahToDo = (newTodo) => {
    let indexLastItemOfArr = data[data.length-1].id
    const newTask = {id: indexLastItemOfArr+1, ...newTodo};
    setData((oldData) => [...oldData, newTask]);
  }

 const  handleCheckboxChange = (id) => {
    const newToDoList = data.map((todo) => {
      if(todo.id === id)
        return{...todo, completed: !todo.completed}
      return todo;
      })
    setData(newToDoList);
  }

  return(
    <div className="home">
      <h1 className="title">TODOs</h1>
      <ToDoInput tambahToDo={tambahToDo}/>
      <ToDoList data={data} hapusToDo={hapusToDo} handleChange={handleCheckboxChange}/>
    </div>
  )
}

export default Home;