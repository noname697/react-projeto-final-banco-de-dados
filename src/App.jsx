import { useState } from "react";
import styled from "styled-components";

const GlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #1a202c; /* darkBackground */
  font-family: "Arial, sans-serif";
`;
const LoginBox = styled.div`
  background-color: #2d3748; /* boxBackground */
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  width: 350px;
  text-align: center;
`;
const Title = styled.h2`
  font-family: sans-serif;
  color: #63b3ed; /* titleBlue */
  margin-bottom: 30px;
`;
const InputGroup = styled.div`
  margin-bottom: 20px;
`;
const Input = styled.input`
  width: calc(100% - 20px);
  padding: 12px 10px;
  border-radius: 5px;
  border: 1px solid #4299e1; /* primaryBlue */
  background-color: #2d3748; /* boxBackground */
  color: #cbd5e0; /* lightText */
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #63b3ed; /* titleBlue */
    box-shadow: 0 0 0 1px #63b3ed; /* titleBlue */
  }
`;
const Button = styled.button`
  font-family: sans-serif;
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: none;
  background-color: #4299e1; /* primaryBlue */
  color: white;
  font-size: 18px;
  font-weight: 100;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3182ce; /* hoverBlue */
  }

  ${InputGroup}:last-of-type & {
    margin-top: 10px;
  }
`;

function App() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <GlobalContainer>
      <LoginBox>
        <Title>Login</Title>

        <InputGroup>
          <Input
            type="text"
            placeholder="Username"
            onChange={(e) => setLogin(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setSenha(e.target.value)}
          />
        </InputGroup>

        <Button onClick={() => {}}>Entrar</Button>
      </LoginBox>
    </GlobalContainer>
  );
}

export default App;
