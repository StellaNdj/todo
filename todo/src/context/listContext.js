import { createContext, useEffect, useState } from 'react';
import { v4 as uuidV4 } from 'uuid'

export const ListContext = createContext();

export const ListContextProvider = ({children}) => {
  const [list, setList] = useState(() => {
    // Retrieve list from the storage
    const savedTasks = localStorage.getItem('userTasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Set list in the storage
  useEffect(() => {
    localStorage.setItem('userTasks', JSON.stringify(list));
  }, [list])

  const createTask = (task) => {
    const newTask = { id: uuidV4(), name: task };
    setList([...list, newTask])

  }

  const deleteTask = (selectedTask) => {
    const newList = list.filter(task => task.id !== selectedTask.id);
    setList(newList)
  }

  const updateTask = (updatedTask) => {
    const updatedList = list.map(task =>
      task.id === updatedTask.id ? {...task, name: updatedTask.name} : task
    )
    setList(updatedList);
  }

  return (
    <ListContext.Provider value={{list, createTask, updateTask, deleteTask}}>
      {children}
    </ListContext.Provider>
  )
}
