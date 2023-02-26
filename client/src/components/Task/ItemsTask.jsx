
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import media from "styled-media-query";
import { MdOutlineEditOff, MdOutlineEdit } from "react-icons/md";

import ShowItem from './ShowItem';
import UpdateTask from './UpdateTask';

const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  background-color: #edc8c8;
  border-radius: 5px;
  ${media.lessThan("small")`
    text-align: center;
    font-weight: bold;
  `}
`;

const UpdateItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  ${media.lessThan("small")`
    justify-content: center;
  `}
`;

const ButtonUpdate = styled.span`
  color: rgb(85,85,199);
  cursor: pointer;
`;

const ItemsTask = ({ task, socket }) => {
  const [showUpdate, setShowUpdate] = useState({ show: false, id: false });
  return (
    <>
      {task[1].items ? <>
        {task[1].items.map((item, index) => (
          <Draggable
            key={item.id}
            draggableId={item.id}
            index={index}
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={`${task[1].title.toLowerCase()}__items`}
              >
                <UpdateItem>
                  <ButtonUpdate onClick={() => setShowUpdate({
                    show: !showUpdate?.show,
                    id: item.id
                  })}>
                    {showUpdate.show && showUpdate.id === item.id ?
                      <MdOutlineEditOff size={40} color='red' /> :
                      <MdOutlineEdit size={40} />}
                  </ButtonUpdate>
                </UpdateItem>

                {showUpdate.show && showUpdate.id === item.id ?
                  <UpdateTask item={item} socket={socket}
                    status={task[0]} setShowUpdate={setShowUpdate} /> :
                  <ShowItem item={item} task={task} socket={socket} />
                }
              </div>
            )}
          </Draggable>
        ))}
      </> : <EmptyContent>Sem item</EmptyContent>}
    </>
  )
}

export default ItemsTask
