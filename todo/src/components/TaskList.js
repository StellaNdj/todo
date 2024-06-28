import { useContext, useState } from "react";
import { ListContext } from "../context/listContext";
import EditTask from "./EditTask";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenSquare } from '@fortawesome/free-solid-svg-icons';


const TaskList = () => {
  const { list, deleteTask } = useContext(ListContext);
  const [editingTask, setEditingTask] = useState(null)

  const handleDelete = (task) => {
    deleteTask(task);
  }

  const handleEdit = (task) => {
    setEditingTask(task);
  }

  const handleCancelEdit = () => {
    setEditingTask(null);
  }

  return (
    <>
      {list && list.map(task =>
        <div className="task-item" key={task.id}>{task.name}
          <div>
            <FontAwesomeIcon className='edit-icon' onClick={() => handleEdit(task)} icon={faPenSquare} size='lg'/>
            <FontAwesomeIcon className='trash-icon' onClick={() => handleDelete(task)} icon={faTrashCan} size='lg'/>
          </div>
        </div>
      )}
      {editingTask && <EditTask task={editingTask} onCancel={handleCancelEdit}/>}
    </>
  )
}

export default TaskList;
