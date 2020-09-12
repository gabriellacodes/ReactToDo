import React from "react";
import "./ToDoItem.css";

function Todo(props) {
    const { todo, index, toggleStatusTodo, removeTodo } = props;
    return (
        // ` evaluates what's in the curly brackets, the ? represents the end of the if statement. In this case it's evaluating "todo ${todo.isCompleted" is either completed or not
        <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
        {todo.text}
        <div>
    <button onClick={() => toggleStatusTodo(index)}>{`${todo.isCompleted ? "Undo" : "Mark Complete"}`}</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
        </div>
        </div>
    );
}

export default Todo;