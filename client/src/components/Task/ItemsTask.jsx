
import { Link } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Markdown from 'marked-react';
import media from "styled-media-query";

import ContainersButtons from './Buttons/ContainersButtons';

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

const ContainerComments = styled.div`
  text-align: right;
  font-size: 14px;
  cursor: pointer;
  color: rgb(85, 85, 199);
  ${media.lessThan("small")`
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 12px;
    font-weight: bold;
  `}
  &:hover {
    text-decoration: underline;
  }
`;

const ItemsTask = ({ task, socket }) => {
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
                <p>{item.title}</p>

                <Markdown breaks={true}>
                  {`${item?.content}...`}
                </Markdown>

                <ContainersButtons status={task[0]} item={item} socket={socket} />

                <ContainerComments>
                  <Link
                    to={`/comments/${task[1].title}/${item.id}`}
                  >
                    {item.comments.length > 0
                      ? `Ver os comentários`
                      : "Adicionar comentário"}
                  </Link>
                </ContainerComments>
              </div>
            )}
          </Draggable>
        ))}
      </> : <EmptyContent>Sem item</EmptyContent>}
    </>
  )
}

export default ItemsTask
