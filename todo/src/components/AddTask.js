import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ListContext } from '../context/listContext';


const AddTask = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const { createTask } = useContext(ListContext);

  const handleForm = (data) => {
    createTask(data.name);
    reset();
  }

  return (
    <>
      <form className="task-form" onSubmit={handleSubmit(handleForm)}>
        <input type='text' {...register('name', { required: 'Name is required' })}></input>
        <button type='submit' className='add-btn'>+ Add</button>
      </form>
        {errors.name && <div className='errors'>{errors.name.message}</div>}
    </>
  )
}

export default AddTask;
