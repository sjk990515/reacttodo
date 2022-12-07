import React, { useRef, useState } from "react";
import "../css/TodoInput.css";

const TodoInput = ({ onAdd }) => {
  const textRef = useRef();
  const [text, setText] = useState("");
  const [textTit, setTit] = useState("");

  const changeInput = (evt) => {
    const { value } = evt.target;
    setText(value);
  };

  const changeTit = (evt) => {
    const { value } = evt.target;
    setTit(value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (!text) return;
    if (!textTit) return;

    onAdd(text, textTit);

    setText("");
    setTit("");
    textRef.current.focus();
  };

  return (
    <form className="TodoInput" onSubmit={onSubmit}>
      <input
        type="text"
        value={textTit}
        onChange={changeTit}
        ref={textRef}
        placeholder="제목을 입력하세요"
        maxLength={10}
      />
      <input
        type="text"
        value={text}
        onChange={changeInput}
        ref={textRef}
        placeholder="내용을 입력하세요"
        maxLength={20}
      />
      <button>버튼</button>
    </form>
  );
};

export default TodoInput;
