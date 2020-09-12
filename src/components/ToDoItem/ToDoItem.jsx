import React from "react";
import "./ToDoItem.css";

function Todo(props) {
    const { todo, index, completeTodo } = props;
    return (
        <div className="todo">
        {todo.text}
        <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        </div>
        </div>
    );
}

export default Todo;