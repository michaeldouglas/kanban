import { useState, useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";

import TokenContext from "../../contexts/Token";
import Request from "../../library/Request/Request";

const ContainerAddTask = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: solid 1px rgba(0,0,0,0.4);
  border-radius: 10px;
  box-shadow: 0 3px 5px 3px rgba(0,0,0,0.2);
  margin-top: 1rem;
  width: 50%;
  ${media.lessThan("small")`
    width: 100%;
    margin: 1rem;
  `}
`;

const InputData = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const TextAreaData = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  margin-top: 0.5rem;
  margin-bottom: 0.8rem;
`;

const AddTask = ({ socket }) => {
  const token = useContext(TokenContext);
  const [task, setTask] = useState("");
  const [content, setContent] = useState("");

  const addHandler = async (lista, titulo, conteudo) => {
    await Request.post('cards',
      { lista, titulo, conteudo: content }, token?.token);

    socket.emit("createTask", { titulo });
    setTask("");
    setContent("");
  }

  const handleAddTodo = async (e) => {
    e.preventDefault();
    await addHandler('todo', task, 'teste2');
  };
  return (
    <form className='form__input' onSubmit={handleAddTodo}>

      <ContainerAddTask>
        <label htmlFor='task'>Adicionar TODO</label>
        <InputData
          type='text'
          name='task'
          id='task'
          value={task}
          required
          onChange={(e) => setTask(e.target.value)}
        />
        <TextAreaData
          value={content}
          required
          onChange={(e) => setContent(e.target.value)}
        />
        <button className='addTodoBtn'>ADICIONAR</button>
      </ContainerAddTask>

    </form>
  );
};

export default AddTask;
