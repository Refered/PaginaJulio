import React, { useState, useEffect } from 'react';
import './content.css'; 

interface Task {
  text: string;
  completed: boolean;
}

// Declarar la función saveStateToLocalStorage aquí
const saveStateToLocalStorage = (state: any) => {
  localStorage.setItem('appState', JSON.stringify(state));
};

function ContentPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  // Función para limpiar tareas completadas
  const clearCompletedTasks = () => {
    setCompletedTasks([]);
    saveStateToLocalStorage({ tasks, completedTasks: [] });
  };

  // Función para limpiar tareas por hacer
  const clearTodoTasks = () => {
    setTasks([]);
    saveStateToLocalStorage({ tasks: [], completedTasks });
  };

  // ...

  useEffect(() => {
    // Cargar tareas y tareas completadas desde localStorage al inicio
    const storedState = localStorage.getItem('appState');
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      setTasks(parsedState.tasks || []);
      setCompletedTasks(parsedState.completedTasks || []);
    }
  }, []);
  const addTask = (newTask: string) => {
    const updatedTasks = [...tasks, { text: newTask, completed: false }];
    setTasks(updatedTasks);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
 
  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = [...tasks];
    const taskToMove = updatedTasks[index];
    taskToMove.completed = !taskToMove.completed;

    const updatedCompletedTasks = [...completedTasks, taskToMove];
    setCompletedTasks(updatedCompletedTasks);

    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    localStorage.setItem('completedTasks', JSON.stringify(updatedCompletedTasks));
  };

  return (
    <div className="content">
      <h1>Lista de Tareas</h1>
      {}
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const newTask = (e.target as HTMLFormElement).task.value;
          if (newTask.trim() !== '') {
            addTask(newTask);
            (e.target as HTMLFormElement).task.value = '';
          }
        }}
      >
        <input type="text" name="task" placeholder="Agregar una tarea" />
        <button type="submit">Agregar</button>
      </form>

      {}
      <div className="lists-container">
        {}
        <div className="task-list">
        
          <h2>Tareas por Hacer</h2>
          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                onClick={() => toggleTaskCompletion(index)}
                className={task.completed ? 'completed' : ''}
              >
                {task.text}
              </li>
            ))}
          </ul>
          <button onClick={clearTodoTasks}>Borrar To Do</button>
        </div>
        

        {}
        <div className="task-list">
          <h2>Tareas Completadas</h2>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>{task.text}</li>
            ))}
          </ul>
          <button onClick={clearCompletedTasks}>Borrar Completadas</button>

        </div>
      </div>   


   </div>
  );
}

export default ContentPage;
