import { useState } from 'react';
import { AddTask } from './components/AddTask.tsx';
import { TasksList } from './components/TasksList.tsx';
import { TaskItem } from './components/TaskItem.tsx';
import './App.css'

function App() {

  return (
    <>
      <h1> To Do:</h1>
      <TasksList />
    </>
  )
}

export default App
