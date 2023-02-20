import { useRef, useState } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "../context/todos";

function Input() {
  const [text, setText] = useState("");
  const nextId = useRef(4);
  const inputRef = useRef();

  const dispatch = useTodoDispatch();

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("사야할 것을 입력해주세요.");
      return;
    }

    dispatch({ type: "CREATE", id: nextId.current++, text });
    setText("");
    inputRef.current.focus();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextInput
          placeholder="사야할 것을 입력해주세요."
          onChange={handleText}
          value={text}
          ref={inputRef}
        />
        <Button>등록</Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  border-top: 2px solid grey;
  padding: 10px;
`;

const TextInput = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: none;

  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 5px;
  outline: none;
  border: none;

  font-weight: 700;

  background-color: lightblue;
  color: white;

  cursor: pointer;
`;

export default Input;
