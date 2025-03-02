import React, { FC, useState, useEffect } from 'react';
import { addTask, getTasks } from '../util/requests.ts';
import { Task } from '../util/models.ts';
import { TaskItem } from './TaskItem.tsx';
import { AddTask } from './AddTask.tsx';

export const TasksList: FC = () => {
  const [tasks, setTasks] = useState<Task>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const handleTaskSubmit = (task: Task) => {
    console.log(task)
    addTask()
      .then(res => {
      }).catch((error) => {
        setErrors(error);
      });
    setTasks([...tasks, task])
  }
  useEffect(() => {
    setIsLoading(true);
    getTasks()
      .then(res => {
        setTasks([...res.data]);
      }).catch((error) => {
        setErrors([...errors, error]);
      })
      setIsLoading(false);
  }, []);

  if (isLoading) return <p>Fancy Loading Spinner</p>;
  return (
    <>
      <AddTask handleSubmit={handleTaskSubmit}/>
      {errors.length && (
        <div>
          {errors.map(err => 
            <span key="err.message">{err.message}</span>
          )}
        </div>
      )}
      <>
        {tasks.map((task: Task) => 
            <TaskItem key={task.id} name={task.name}/>
          ) 
        }
      </>
    </>
  );
};
