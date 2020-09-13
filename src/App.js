import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/ToDoForm/ToDoForm.jsx";
import TodoItem from "./components/ToDoItem/ToDoItem.jsx";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool To Do app",
      isCompleted: false,
    },
  ]);

  const [completedTodos, setCompletedTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: true,
    },
  ])

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addCompletedTodo = (index) => {
    const newTodos = [...todos];
    const newItem = newTodos[index];
    const newCompletedTodos = [...completedTodos, newItem];
    setCompletedTodos(newCompletedTodos);
  }

  const toggleStatusTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    removeTodo(index);
    addCompletedTodo(index);
    // const newItem = newTodos[index];
    // const newCompletedTodos = [...completedTodos, newItem];
    // setCompletedTodos(newCompletedTodos);
  };

  // const addCompletedTodos = (index) => {
  //   const newTodos = [...todos];
  //   newTodos[index].isCompleted = !newTodos[index].isCompleted;
  //   removeTodos(index);
  // };



  return (
    <div className="app">
    <div className="todo-list">
    <h1>My To Do list</h1>
    <h2>Things left to do</h2>
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
    <h2>What's been completed</h2>
    {completedTodos.map((todo, index) => (
      <TodoItem
      todo={todo}
      index={index}
      key={index}
      toggleStatusTodo={toggleStatusTodo}
      removeTodo={removeTodo}
      />
    ))}
    </div>
    </div>
  );
}

export default App;