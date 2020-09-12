import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/ToDoForm/ToDoForm.jsx";
import TodoItem from "./components/ToDoItem/ToDoItem.jsx";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool To Do app",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
    <div className="todo-list">
    <h1>My To Do list</h1>
    {todos.map((todo, index) => (
      <TodoItem todo={todo} index={index} completeTodo={completeTodo} />
    ))}
    <TodoForm addTodo={addTodo}/>
    </div>
    </div>
  );
}

export default App;