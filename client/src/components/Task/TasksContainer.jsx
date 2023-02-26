import { useState, useEffect, useContext } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import TokenContext from "../../contexts/Token";
import Request from "../../library/Request/Request";
import ItemsTask from './ItemsTask';

const TasksContainer = ({ socket }) => {
  const token = useContext(TokenContext);
  const [tasks, setTasks] = useState({});

  function groupBy(arr, valueType) {
    return arr.reduce((key, value) => {
      key[value.lista] = key[value.lista] || [];

      if (valueType === value.lista) {
        key[value.lista].push({
          id: value?.id,
          title: value?.titulo,
          content: value?.conteudo,
          comments: value?.comments || []
        });
      }

      return key;
    }, {});
  };

  function getItems(items, property) {
    if (property === 'todo') {
      return items.todo
    } else if (property === 'done') {
      return items.done
    }

    return items.doing
  }

  useEffect(() => {
    async function fetchTasks() {
      const { data } = await Request.get('cards', token?.token);

      setTasks({
        todo: {
          title: 'todo',
          items: getItems(groupBy(data, 'todo'), 'todo'),
          comments: []
        },
        doing: {
          title: 'doing',
          items: getItems(groupBy(data, 'doing'), 'doing'),
          comments: []
        },
        done: {
          title: 'done',
          items: getItems(groupBy(data, 'done'), 'done'),
          comments: []
        }
      });
    }
    fetchTasks();
  }, [token]);

  useEffect(() => {
    socket.on("tasks", (data) => {
      setTasks({
        todo: {
          title: 'todo',
          items: getItems(groupBy(data, 'todo'), 'todo'),
          comments: []
        },
        doing: {
          title: 'doing',
          items: getItems(groupBy(data, 'doing'), 'doing'),
          comments: []
        },
        done: {
          title: 'done',
          items: getItems(groupBy(data, 'done'), 'done'),
          comments: []
        }
      });
    });
  }, [socket]);

  const handleDragEnd = async ({ destination, source }) => {
    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;

    const { id, title, content, comments } = {
      ...tasks[source.droppableId].items[source.index]
    };

    await Request.put(`cards/${id}`, {
      id,
      titulo: title,
      conteudo: content,
      comments,
      lista: destination.droppableId
    }, token?.token);

    socket.emit("taskDragged");
  };

  return (
    <div className='container'>
      <DragDropContext onDragEnd={handleDragEnd}>
        {Object.entries(tasks).map((task) => (
          <div
            className={`${task[1].title.toLowerCase()}__wrapper`}
            key={task[1].title}
          >
            <h3>{task[1].title} Tasks</h3>
            <div className={`${task[1].title.toLowerCase()}__container`}>
              <Droppable droppableId={task[1].title}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <ItemsTask task={task} socket={socket} />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
};

export default TasksContainer;
