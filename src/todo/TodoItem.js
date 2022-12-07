import React from "react";

const TodoItem = ({ todos, onDel, onToggle }) => {
  const { id, text, done, textTit } = todos;

  return (
    <div className="TodoNext">
      <li>
        <h3>{text}</h3>
        <p>{textTit}</p>
        <div className="BoxButton">
          <button onClick={() => onToggle(id)}>{done ? "취소" : "완료"}</button>
          <button onClick={() => onDel(id)}>삭제</button>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
