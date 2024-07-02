import { useContext, useState, useEffect } from "react";
import { ListContext } from "../context/listContext";
import EditTask from "./EditTask";
import Task from "./Task";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const TaskList = () => {
  const { list, deleteTask } = useContext(ListContext);
  const [editingTask, setEditingTask] = useState(null);
  const [tasks, setTasks] = useState(list);

  useEffect(() => {
    setTasks(list);
  }, [list]);

  const handleDelete = (task) => {
    deleteTask(task);
  }

  const handleEdit = (task) => {
    setEditingTask(task);
  }

  const handleCancelEdit = () => {
    setEditingTask(null);
  }

  const handleOnDragEnd = (result) => {
    if(!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItems);

    setTasks(items);
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks && tasks.map((task, index) =>
                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Task task={task}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete} />
                    </div>
                  )}
                </Draggable>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {editingTask && <EditTask task={editingTask} onCancel={handleCancelEdit}/>}
    </>
  )
}

export default TaskList;
