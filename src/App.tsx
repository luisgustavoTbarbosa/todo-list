import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'
import './global.css'
import styles from './App.module.css'
import { useState } from 'react'

export function App() {
  const [tasks, setTasks] = useState([
    {comment: 'Lavar a louça'}
  ])

  function handleCreateNewTask(newTask) {
    setTasks([...tasks, newTask])
    console.log('tasks', tasks)
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask createNewTask={handleCreateNewTask} />
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}