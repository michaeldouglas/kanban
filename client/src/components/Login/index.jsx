import { useState, memo, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Request from "../../library/Request/Request";
import { sizeObject } from "../../helper/helpers";
import Modal from '../Reusables/Modal';
import ErrorMessageWrapper from '../Reusables/ErrorMessage';


const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  padding: 1.5rem;
  background-color: #f5f5f5;
  border-radius: 15px;
  border: 1px solid black;
`;

const LoginInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  color: #555;
  line-height: 1.42857143;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

const LoginButton = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #00a8ff;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
`;



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const { data } = await Request.post('/login',
        { login: username, senha: password });
      return sizeObject(data);
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("logged") !== null) {
      navigate("/task");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchData();
    if (data) {
      localStorage.setItem("userId", username);
      localStorage.setItem("logged", true);
      setUsername("");
      navigate("/task");
    } else {
      setError(!error);
    }
  };

  return (

    <LoginContainer>
      {error && <Modal isOpen={error}>
        <ErrorMessageWrapper >
          <h3>Usuário ou senha inválido!</h3>
          <p>Para a demo utilize o usuário: <strong>letscode</strong>
            &nbsp;e senha: <strong>lets@123</strong></p>
        </ErrorMessageWrapper>
      </Modal>}

      <LoginForm onSubmit={handleSubmit}>
        <h2>Kanban</h2>
        <LoginInput
          type="text"
          placeholder="Usuário *"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="Senha *"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton type="submit">Entrar</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default memo(Login);
