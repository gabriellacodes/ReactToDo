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

  const toggleStatusTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
    <div className="todo-list">
    <h1>My To Do list</h1>
    {todos.map((todo, index) => (
      <TodoItem
      todo={todo}
      index={index}
      key={index}
      toggleStatusTodo={toggleStatusTodo}
      removeTodo={removeTodo}
      />
    ))}
    <TodoForm addTodo={addTodo}/>
    </div>
    </div>
  );
}

export default App;