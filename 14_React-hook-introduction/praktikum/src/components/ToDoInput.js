import { useState } from "react";

function ToDoInput (props){
  const [data, setData] = useState({
    id: "",
    title: "",
    completed: false,
  })

  const onChange = (e) => {
    setData({
      ...data, [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formIsNotEmpty = data.title;
    if(formIsNotEmpty){
      const newData = {
        title: data.title,
        completed: data.completed,
      };
      props.tambahToDo(newData);
      setData({
        title: "",
        completed: "false",
      });
    }else{
      alert("Data masih kosong")
    }
  }

  return(
    <div className="container-todo">
        <input type="text" name="title" placeholder="Add todo..." value={data.title} onChange={(e) => {onChange(e)}}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ToDoInput;