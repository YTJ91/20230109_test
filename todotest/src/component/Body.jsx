import styled from "styled-components";
import { useTodoState } from "../context/todos";
import Item from "./item";

function Body() {
  const todos = useTodoState();

  return (
    <Container>
      <ul>
        {todos.map((todo) => (
          <Item key={todo.id} todo={todo} />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;

export default Body;
