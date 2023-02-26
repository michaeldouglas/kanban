
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import styled from "styled-components";

const NavBar = styled.nav`
  width: 100%;
  background-color: #f1f7ee;
  height: 10vh;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Loggout = styled.div`
  font-size: 18px;
`;
const LoggoutButton = styled.button`
  width: 50px;
  cursor: pointer;
  background-color: #e24242;
  color: #fff;
  border: none;
  outline: none;
  height: 25px;
  margin-left: 0.5rem;
  border-radius: 3px;
  font-size: 16px;
`;

const Nav = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem("userId"));
  }, []);

  const ExitKanban = () => {
    confirmAlert({
      title: 'Kanban',
      message: `Olá ${username} você realmente deseja sair?`,
      buttons: [
        {
          label: 'Sim',
          onClick: () => {
            localStorage.removeItem('userId');
            localStorage.removeItem('logged');
            navigate("/");
          }
        },
        {
          label: 'Não'
        }
      ]
    });
  };

  return (
    <NavBar>
      <h3>Sistema Kanban</h3>
      <Loggout>
        Olá: <strong>{username}</strong>
        <LoggoutButton onClick={ExitKanban}>Sair</LoggoutButton>
      </Loggout>
    </NavBar>
  );
};

export default Nav;
