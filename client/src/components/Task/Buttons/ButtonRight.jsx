import { memo, useContext } from 'react';
import { MdOutlineChevronRight } from "react-icons/md";
import styled from "styled-components";

import TokenContext from "../../../contexts/Token";
import Request from "../../../library/Request/Request";

const ButtonLeftAndRight = styled.span`
  color: rgb(85, 85, 199);
  cursor: pointer;
`;

const ButtonRight = ({ status, item, socket }) => {
  const token = useContext(TokenContext);

  const getForward = (status) => {
    let back = false;

    switch (status) {
      case 'todo':
        back = 'doing';
        break;
      case 'doing':
        back = 'done';
        break;
      default:
        back = 'done';
    }

    return back;
  }

  if (status !== 'done') {
    const changeState = async () => {
      const { id, title, content, comments } = item;

      await Request.put(`cards/${id}`, {
        id,
        titulo: title,
        conteudo: content,
        comments,
        lista: getForward(status)
      }, token?.token);

      socket.emit("taskDragged");
    }

    return (
      <ButtonLeftAndRight onClick={changeState}><MdOutlineChevronRight size={40} /></ButtonLeftAndRight>
    )
  }

  return <>&nbsp;</>
}

export default memo(ButtonRight);
