import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/** Generate Random ID */
import { v4 as uuidv4 } from "uuid";

let initialState = [
  {
    id: 0,
    title: "",
    completed: false,
  },
];

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const response = await axios.get("https://certain-pika-47.hasura.app/api/rest/todos");

  if (response.status === 200) {
    const todos = await response.data;
    return { todos };
  }
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { payload } = action;
      payload.e.preventDefault();
      payload.input === ""
        ? alert("Jangan dikosongin, isi dulu yaa")
        : state.push({
            id: uuidv4(),
            title: action.payload.input,
            completed: false,
          });
    },
    deleteTodo: (state, action) => {
      const { payload } = action;
      const newListTodo = state.filter((todo) => todo.id !== payload);
      state = newListTodo;
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    checkedTodo: (state, action) => {
      const { payload } = action;
      const newListTodo = state.map((todo) => {
        console.log(state);
        if (todo.id === payload.id) {
          return {
            id: todo.id,
            title: todo.title,
            completed: payload.checked,
          };
        } else {
          return {
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
          };
        }
      });
      state = newListTodo;
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      return (state[index].completed = action.payload.completed);
    },
  },
  extraReducers: {
    [getTodos.fulfilled]: (state, action) => {
      console.log(action.payload.todos.todos);
      return action.payload.todos.todos;
    },
    [getTodos.pending]: (state, action) => {
      // console.log("Loading...");
    },
  },
});

export const { addTodo, deleteTodo, checkedTodo } = todosSlice.actions;

export default todosSlice.reducer;