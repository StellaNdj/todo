import { useForm } from "react-hook-form";
import { ListContext } from "../context/listContext";
import { useContext } from "react";

const EditTask = ({task, onCancel}) => {

  const { updateTask } = useContext(ListContext);

  const { register, formState: {errors}, reset, handleSubmit } = useForm({
    defaultValues: { name: task.name, id: task.id }
  });

  const handleForm = (data) => {
    updateTask(data);
    reset();
    onCancel();
  }

  return (
    <form className='task-form' onSubmit={handleSubmit(handleForm)}>
      <input type='text' {...register('name', { required: 'Name is required' })}></input>
      {errors.name && <span>{errors.name.message}</span>}
      <button className="add-btn" type='submit'>Update</button>
      <button className='cancel-btn' type='button' onClick={onCancel}>X</button>
    </form>
  )
}

export default EditTask;
