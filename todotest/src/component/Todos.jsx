import styled from "styled-components";
import { TodoProvider } from "../context/todos";
import Body from "./Body";
import Header from "./Header";
import Input from "./Input";

function Todos() {
  return (
    <TodoProvider>
      <Container>
        <Header />
        <Body />
        <Input />
      </Container>
    </TodoProvider>
  );
}

const Container = styled.div`
  height: 800px;
  width: 500px;

  box-shadow: 15px 15px rgba(0, 0, 0, 0.3);
  background-color: white;

  display: flex;
  flex-direction: column;
`;
export default Todos;
