import { useState, useContext } from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { MdSave } from "react-icons/md";
import * as DOMPurify from 'dompurify';
import MDEditor from '@uiw/react-md-editor';

import Request from '../../library/Request/Request';
import TokenContext from "../../contexts/Token";

const ContainerUpdateTask = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  ${media.lessThan("small")`
    margin: 1rem;
    padding: 0;
  `}
`;

const InputData = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const FormUpdate = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextAreaData = styled(MDEditor)`
  width: 100%;
  padding: 10px 15px;
  margin-top: 0.5rem;
  margin-bottom: 0.8rem;
`;

const ContainerArea = styled.div`
  width: 100%;
`;


const UpdateTask = ({ item, socket, status, setShowUpdate }) => {
  const [task, setTask] = useState(item?.title);
  const [content, setContent] = useState(item?.content);
  const token = useContext(TokenContext);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { id } = item;

    await Request.put(`cards/${id}`, {
      id,
      titulo: task,
      conteudo: DOMPurify.sanitize(content),
      lista: status
    }, token?.token);

    setShowUpdate({
      show: false,
      id
    });

    socket.emit("taskDragged");
  };

  return (
    <FormUpdate onSubmit={handleUpdate}>
      <ContainerUpdateTask>
        <label htmlFor='task'>Atualizar TODO</label>
        <InputData
          type='text'
          name='task'
          id='task'
          value={task}
          required
          onChange={(e) => setTask(e.target.value)}
        />
        <ContainerArea data-color-mode="light">
          <TextAreaData
            value={content}
            onChange={setContent}
            preview="edit"
          />
        </ContainerArea>
        <button className='updateTodoBtn'>ATUALIZAR <MdSave size={20} /></button>
      </ContainerUpdateTask>
    </FormUpdate>
  )
}

export default UpdateTask;
