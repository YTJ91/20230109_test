import styled from "styled-components";
import { useTodoState } from "../context/todos";

function Header() {
  const todos = useTodoState();
  const days = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });

  const doneCount = todos.filter((todo) => todo.done).length;

  return (
    <Container>
      <h2>장 볼 거리</h2>
      <Title>{days}</Title>
      <CountText>
        구입 완료 : {doneCount}/{todos.length}
      </CountText>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 20px;
  border-bottom: 2px solid grey;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
`;

const CountText = styled.span`
  color: #666;
`;

export default Header;
