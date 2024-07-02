import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Task = ({task, handleEdit, handleDelete}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <div className={`task-item ${ isChecked ? 'checked' : ''}`}  key={task.id}>{task.name}
      <div>
        <label><input className='checkbox' type="checkbox" onChange={handleCheck}/></label>
        <FontAwesomeIcon className='edit-icon' onClick={() => handleEdit(task)} icon={faPenSquare} size='lg'/>
        <FontAwesomeIcon className='trash-icon' onClick={() => handleDelete(task)} icon={faTrashCan} size='lg'/>
      </div>
    </div>
  )
}

export default Task;
