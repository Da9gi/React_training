import React, { useState } from "react";
import "../functional.css";
import TodoForm from "./todoForm";

function Todotask({ todo, index, doneTodo, deleteTodo }) {
    return (
        <div>
            <div
                style={{
                    textDecoration: todo.isCompleted ? "line-through" : "",
                }}
            ></div>
            <br></br>
            <div className="todo">{todo.text}</div>
            <button className="button" onClick={() => doneTodo(index)}>
                Done
            </button>
            {`       `}
            <button className="button" onClick={() => deleteTodo(index)}>
                X
            </button>
        </div>
    );
}

export default function Todolist() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodos = [{ text }, ...todos];
        setTodos(newTodos);
    };

    const doneTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todotask
                    index={index}
                    todo={todo}
                    doneTodo={doneTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
}
