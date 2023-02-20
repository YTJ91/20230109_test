import styled from "styled-components";
import { useTodoDispatch } from "../context/todos";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";

function Item({ todo }) {
  const dispatch = useTodoDispatch();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE", id: todo.id });
  };

  const handleRemove = () => {
    if (window.confirm("삭제하시겠습니까?"))
      dispatch({ type: "REMOVE", id: todo.id });
  };

  return (
    <Container done={todo.done}>
      <BtnCheck onClick={handleToggle}>
        {todo.done ? <BsCheckCircleFill /> : <BsCheckCircle />}
      </BtnCheck>
      <p>{todo.text}</p>
      <BtnDel>
        <RiDeleteBinLine onClick={handleRemove} />
      </BtnDel>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  align-items: center;

  padding: 10px 10px;

  border-bottom: 2px solid grey;

  p {
    flex: 1;
    margin-left: 10px;
    text-decoration: ${({ done }) => done && "line-through 1px"};
  }
`;

const BtnCheck = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
`;

const BtnDel = styled.button`
  outline: none;
  border: none;

  cursor: pointer;
`;

export default Item;
