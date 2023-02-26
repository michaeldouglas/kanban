import { memo, useContext } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import styled from "styled-components";

import TokenContext from "../../../contexts/Token";
import Request from "../../../library/Request/Request";

const ButtonRemove = styled.span`
  color: #e24242;
  cursor: pointer;
`;

const ButtonDelete = ({ socket, item }) => {
  const token = useContext(TokenContext);

  const removeItem = async () => {
    const { id } = item;

    await Request.delete(`cards/${id}`, token?.token);

    socket.emit("taskDragged");
  }

  return (
    <ButtonRemove onClick={removeItem}><MdOutlineDeleteOutline size={40} /></ButtonRemove>
  )
}

export default memo(ButtonDelete)
