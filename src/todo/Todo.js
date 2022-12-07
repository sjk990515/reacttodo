import React, { useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/Todo.css";

const Todo = () => {
  const no = useRef(1);

  const [todos, setTodo] = useState([]);

  const onAdd = (textTit, text) => {
    setTodo([
      ...todos,
      {
        id: no.current++,
        text: text,
        textTit: textTit,
        done: false,
      },
    ]);
  };

  const onDel = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  };

  return (
    <div className="TodoTitle">
      <h1>Todo List</h1>
      <TodoInput onAdd={onAdd} />
      <TodoList todos={todos} onDel={onDel} onToggle={onToggle} />
    </div>
  );
};

export default Todo;
