import React from "react";
import TodoItem from "./TodoItem";
import "../css/TodoList.css";

const TodoList = ({ todos, onDel, onToggle }) => {
  return (
    <ul className="TodoList">
      <div className="TodoTitle">
        <div>
          <h2>To Do</h2>
          {todos.map((todos) => {
            if (!todos.done) {
              return (
                <TodoItem
                  key={todos.id}
                  todos={todos}
                  onDel={onDel}
                  onToggle={onToggle}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="DoneColor">
          <h2>Done</h2>
          {todos.map((todos) => {
            if (todos.done) {
              return (
                <TodoItem
                  key={todos.id}
                  todos={todos}
                  onDel={onDel}
                  onToggle={onToggle}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </ul>
  );
};

export default TodoList;
