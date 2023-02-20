import styled from "styled-components";
import Todos from "./component/Todos";

function App() {
  return (
    <Container>
      <Todos />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: #eee;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
