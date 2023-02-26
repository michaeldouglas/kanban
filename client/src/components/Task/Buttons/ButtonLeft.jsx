import { memo, useContext } from 'react';
import { MdOutlineChevronLeft } from "react-icons/md";
import styled from "styled-components";

import TokenContext from "../../../contexts/Token";
import Request from "../../../library/Request/Request";

const ButtonLeftAndRight = styled.span`
  color: rgb(85, 85, 199);
  cursor: pointer;
`;

const ButtonLeft = ({ status, item, socket }) => {
  const token = useContext(TokenContext);

  const getBack = (status) => {
    let back = false;

    switch (status) {
      case 'done':
        back = 'doing';
        break;
      case 'doing':
        back = 'todo';
        break;
      default:
        back = 'todo';
    }

    return back;
  }

  if (status !== 'todo') {
    const changeState = async () => {
      const { id, title, content, comments } = item;

      await Request.put(`cards/${id}`, {
        id,
        titulo: title,
        conteudo: content,
        comments,
        lista: getBack(status)
      }, token?.token);

      socket.emit("taskDragged");
    }

    return (
      <ButtonLeftAndRight onClick={changeState}><MdOutlineChevronLeft size={40} /></ButtonLeftAndRight>
    )
  }

  return <>&nbsp;</>
}

export default memo(ButtonLeft);
